const express=require('express')

const router=express.Router()

const {handleGenerateUrlShortId
    ,handleGetRediredtUrl,
    handleTotalClicks
}=require('../controller/url')

router.post('/url',handleGenerateUrlShortId)

router.get('/:shortId',handleGetRediredtUrl)

router.get('/url/analytics/:id',handleTotalClicks)

module.exports=router