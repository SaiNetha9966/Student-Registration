import React,{useState} from 'react'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import {registerStudent} from "../Redux/Api"
function Registration() {

      const dispatch = useDispatch();
   
      const [regData,setRegData] = useState()

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")

   const handleReg = () =>{
     const data  = {
        Name : name,
        Email : email,
        Password : password,
        PhoneNo : phone
    }
    dispatch(registerStudent(data))
   }
  
   
  const registrationData = useSelector((state) => state);
  console.log("registrationData" , registrationData)
  //const ruleTypeMessage = useSelector((state) => state.ruleTypeMessage);
  //const ruleTypeLoading = useSelector((state) => state.ruleTypeLoading);

   const handleClick = (e) =>{
   console.log("register")
       const data  = {
        Name : name,
        Email : email,
        Password : password,
        PhoneNo : phone
    }
  const url = "http://localhost:5043/api/Registration/Registration";
    axios.post(url, data)
    .then((res) =>{
       // const dt = res.data
        console.log(res.data)
        console.log("resdata")
    })
    .catch((err) =>{
        console.log(err.message)
    })

   }

  return (
  <>

  <section class="vh-100"
  style={{backgroundColor:"#eee"}} >
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius:"25px"}} >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" onChange={(e) =>{setName(e.target.value)}} />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" onChange={(e) =>{setEmail(e.target.value)}} />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" onChange={(e) =>{setPassword(e.target.value)}} />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example4cd" class="form-control" onChange={(e) =>{setPhone(e.target.value)}} />
                      <label class="form-label" for="form3Example4cd">Mobile Number</label>
                    </div>
                  </div>

              

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={handleReg} >Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sampleimage" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </>
        
  )
}

export default Registration