const express=require("express");
const app=express();
const path=require("path");

const port =8080;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/stuffs")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    const homedata=require("./home.json")
    const eventdata=homedata.events;
    const currEvent=homedata.upcoming_events;
    const wwd=homedata.wwd;
    res.render("home.ejs",{homedata,eventdata,currEvent,wwd}); 
});
app.get("/projects",(req,res)=>{
    res.render("projects.ejs"); 
});
app.get("/team",(req,res)=>{
    const data=require("./data.json");
    const teamdata=data.team;
    res.render("team.ejs",{teamdata}); 
});
app.get("/aboutUs",(req,res)=>{
    res.render("aboutUs.ejs"); 
});

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
}); 
