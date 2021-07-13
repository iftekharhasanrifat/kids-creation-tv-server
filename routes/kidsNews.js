const router = require('express').Router();

const Admin = require("../models/Admin");
const KidsNews = require("../models/KidsNews");
//Create Kids News
router.post('/', async (req, res) => {
    const newKidsNews = new KidsNews(req.body);
    try{
        const savedKidsNews = await newKidsNews.save();
        res.status(200).json(savedKidsNews);
    }catch(err){
        res.status(500).json(err);
    }
})

//Update Kids News
router.put('/:id', async (req, res) => {
    try {
        const updatedKidsNews = await KidsNews.findByIdAndUpdate(req.params.id,{
            $set: req.body,
        },{new:true});
        res.status(200).json(updatedKidsNews);
    }
    catch (err){
        res.status(500).json(err);
    }
})

//Delete Kids News

router.delete('/:id', async (req, res) => {
    try {
        await KidsNews.findByIdAndDelete(req.params.id);
        res.status(200).json('Kids News Delete Success');
    }
    catch (err){
        res.status(500).json(err);
    }
})

//Get Kids News
router.get("/:id",async (req,res)=>{
    try{
        const kidsNews = await KidsNews.findById(req.params.id);
        res.status(200).json(kidsNews);
    }
    catch (err){
        res.status(500).json(err);
    }
})
//Get All kidsNews 
router.get("/",async (req,res)=>{
    try{
        const allKidsNews = await KidsNews.find();
        res.status(200).json(allKidsNews);
    }
    catch (err){
        res.status(500).json(err);
    }
})
module.exports = router