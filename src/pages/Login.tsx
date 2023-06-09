import React from "react";
import {MDBCheckbox, MDBContainer, MDBInput} from "mdb-react-ui-kit";
import RegisterButton from "../components/RegisterButton";
import LoginButton from "../components/LoginButton";
import 'bootstrap/dist/css/bootstrap.css'
const LoginPage = () => {
  return (
       <div>
       <div><p className="text-center" >SuCity</p></div>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 ">

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <LoginButton></LoginButton>
      <p></p>
      <div className="text-center">
        <p>Not a member? <RegisterButton></RegisterButton></p>


        </div>


    </MDBContainer>
         </div>
  );
};

export default LoginPage;