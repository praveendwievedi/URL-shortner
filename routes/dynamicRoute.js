const express=require('express')

const router=express.Router()

const {handleGetRediredtUrl}=require('../controller/url')

router.get('/',handleGetRediredtUrl)

module.exports={
    router
}