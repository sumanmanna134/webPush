var push = require('web-push');
let vapIdKeys = { 
    publicKey: 'BNPueVnstahjfhB-j4AOm4dAguoSgVvpIhktakSfuPfWBDO_fFO8ITPWPRJPRQE_UjbDX437HWBj_59cmKE9p5I',
   privateKey: 'ugyqg8J1Sm3qVkQHDSIXMqQRABKpzdGNlwgBxfBe7qA' 
}

push.setVapidDetails('mailto: test@channelier.com',vapIdKeys.publicKey,vapIdKeys.privateKey)
let sub = {}
push.sendNotification(sub,'test message')
