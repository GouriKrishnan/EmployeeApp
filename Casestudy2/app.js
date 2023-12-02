// Task1: initiate app and run server at 3000



const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));

// Task2: create mongoDB connection 
const mongoose=require('mongoose');
mongoose.connect('')
.then(()=>{
    console.log('DB connected successfully')
}).catch((error)=>{
    console.log('Error!! Not connected')
});

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below

app.get("/",async(req,res)=>{
    const data = await employeeData.find({})

    res.send({success : true , data : data});
})


//Schema for the Database
const employeeSchema = mongoose.Schema({
    name : String,
    location : String,
    position : String,
    salary : Number

})

const employeeData = mongoose.model("employeelist",employeeSchema)
module.exports=employeeData;





//TODO: get data from db  using api '/api/employeelist'

const getAllData = async(req,res)=>{
    try{
    const employee = await employeelist.find()
    if (employee.length>0){
        res.status(200).send({success: true,data: employee})
    }else{
        res.status(404).send({success: false,error:"No Data"})
    }
}catch {error}{
    console.error(error);

}

}


//TODO: get single data from db  using api '/api/employeelist/:id'

const getOneData = async (req, res) => {
    try {
        const employeeId = req.params.employeeId; // Assuming you pass the employeeId in the request parameters
        const employee = await employeelist.findById(employeeId);

        if (employee) {
            res.status(200).send({ success: true, data: employee });
        } else {
            res.status(404).send({ success: false, error: "Employee not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: "Internal Server Error" });
    }
};



//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

const postData = async(req,res)=>{
    try{
        const item = req.body
        if (item){
            res.status(404).json({error:'No Data'})
        }else{
            const newemployee = new employee(item)
            const saveemployee = newemployee.save();
            res.status(200).json({success:true,data:saveemployee})
        }

    }catch (error){
        console.error(error)

    }

}




//TODO: delete a employee data from db by using api '/api/employeelist/:id'

const deleteData = async(req,res)=>{
    try{

    const id = req.params.id
    const employee = await employee.findByIdAndDelete(id)
    ConnectionPoolReadyEvent.log(employee)
    if(employee) {
        res.status(200).send({success: true})
    }else{
        res.status(404).send({success:false,error:"No DATA/Blank"})
    }
}catch (error){
    console.error(error)

}

}



//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

const editData = async(req,res)=>{
    try{
        const id = req.params.id
        const updateItem = req.body;
        const update = await employee.findByIdAndUpdate(id,
        {$set: updateData},
        {new: true })

        if(updateItem){
            res.status(200).send({success: true, data:updateItem})
        }
        else{
            res.status(404).send({success: false, data:"Update failed"})
        }
       
    }catch (error){
        console.error(error)

    }

}





module.exports = router;

//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



