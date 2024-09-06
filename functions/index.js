const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.checkTrendAlerts = functions.pubsub.schedule('every 1 hours').onRun(async (context) => {
  const db = admin.firestore();
  const trendsSnapshot = await db.collection('trends').where('isSignificant', '==', true).get();
  const usersSnapshot = await db.collection('users').get();

  const sendNotificationPromises = [];

  trendsSnapshot.forEach((trendDoc) => {
    const trend = trendDoc.data();
    usersSnapshot.forEach((userDoc) => {
      const user = userDoc.data();
      if (user.preferences.includes(trend.category) && user.fcmToken) {
        sendNotificationPromises.push(
          admin.messaging().sendToDevice(user.fcmToken, {
            notification: {
              title: 'Trend Alert',
              body: `A significant trend has been detected in ${trend.category}`,
            },
          })
        );
      }
    });
  });

  await Promise.all(sendNotificationPromises);
});