
const simpleId = require("simple-id");
// const Date=require('')

const URl=require('../models/url')

async function handleGenerateUrlShortId(req,res) {
    const body=req.body;

    if(!body.url) return res.status(400).json({error: " url is needed "})
    
    const shortId=simpleId(8)
     
    await URl.create({
        shortId:shortId,
        redirectUrl:body.url,
        visitHistory:[]
    })
    return res.json({id : shortId})
}

async function handleGetRediredtUrl(req,res) {
    const shortId=req.params.shortId;

    const entry= await URl.findOneAndUpdate({
        shortId
    },{
        $push:{
            visitHistory:{
                timeStamp:new Date(Date.now()).toLocaleString()
            }
        }
    })
    
    return res.redirect(entry.redirectUrl)
}

async function handleTotalClicks(req,res) {
    const shortId=req.params.id;
    
    const result=await URl.findOne({
        shortId:shortId
    })

    return res.json({ totalClicks : result.visitHistory.length , accounts: result.visitHistory })
}

module.exports={
    handleGenerateUrlShortId,
    handleGetRediredtUrl,
    handleTotalClicks
}