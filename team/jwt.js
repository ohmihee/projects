const path = require('path')
require('dotenv').config({path:path.join(__dirname,'.env')})

//JWT토큰생성 header/payload/signature
function createToken(userid){
    let header = {
        "tpy":"JWT",
        "alg":"HS256"
    }
    let exp = new Date().getTime() + ((60*60*2)*1000) // 1970년 1월 1일
    let payload =  {
        userid,
        exp,  //tlrks
    }
    const encodingHeader = Buffer.from(JSON.stringify(header))
                                                            .toString('base64')
                                                            .replace('==','')
                                                            .replace('=','')
    const encodingPayload = Buffer.from(JSON.stringify(payload))
                                                            .update(encodingHeader+"."+encodingPayload)
                                                            .digest('base64')
                                                            .replace('==','')
                                                            .replace('=','')
    let jwt = `${encodingHeader}.${encodingPayload}.${signature}`
    
    return jwt

}

module.exports = createToken










