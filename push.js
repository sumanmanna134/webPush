var push = require('web-push');
let vapIdKeys = { 
    publicKey: 'BNPueVnstahjfhB-j4AOm4dAguoSgVvpIhktakSfuPfWBDO_fFO8ITPWPRJPRQE_UjbDX437HWBj_59cmKE9p5I',
   privateKey: 'ugyqg8J1Sm3qVkQHDSIXMqQRABKpzdGNlwgBxfBe7qA' 
}


push.setVapidDetails('mailto: test@channelier.com',vapIdKeys.publicKey,vapIdKeys.privateKey)
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dLcLMG0MA-U:APA91bEkUwfJXcDiOS0cfO7Pa_9L8UrQcKxbgJ1twZThkBcXNirpaG5P7bLhwQnKx5jQ_SJMB1DKYVMFMJNSvq8QyXJF-sD88CqjrOmjJ7v-3r_RTIE7WPxU4udwkOPDevA0-ZDOvILJ","expirationTime":null,"keys":{"p256dh":"BFJRKFozGJFZl2hCCTQfLE7IfBzPGA9GMOYoV8qMxUdJyK2i0Af_BZKh5BCp_QJsPoUND77DJJTYCUqElcR5JhQ","auth":"hb2b504qUc2njFNIgUCYDw"}}
push.sendNotification(sub,'test message')
