import {  useState } from "react";



const Register = () => {
    const style = {
        color:"white",
        backgroundColor:'red',
        padding:'5px'
    }
    const [values, setValues] = useState({
        name:"",
        userName:"",
        email:"",
        password:"",
        rePassword:""
    })
    const [errors, setErrors] = useState({
        name:"",
        userName:"",
        email:"",
        password:"",
        rePassword:""
    })

    const validateInput = () => {
        const errorsObj = {}
        let IS_VALID  = true;
        if(!values.name){
            errorsObj.name = 'Name Required';
            IS_VALID = false;
        }
        if(!values.email){
            errorsObj.email = 'Email Required';
            IS_VALID = false;

        }else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
            errorsObj.email = "Invalid email address";
            IS_VALID = false;

        }

        if(!values.userName){
            errorsObj.userName = 'UserName Required';
            IS_VALID = false;

        }else if(values.userName.includes(' ')){
            errorsObj.userName = 'UserName must not include Space';
            IS_VALID = false;

        }

        if(!values.password){
            errorsObj.password = 'Password Required';
            IS_VALID = false;

        }else if (values.password.length < 8){
            errorsObj.password = "must be more than 8 char"
            IS_VALID = false;

        }else if(values.password !== values.rePassword){
            errorsObj.password = "password and Repassword Not Match"
            IS_VALID = false;

        }
        setErrors(errorsObj);
        return IS_VALID;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateInput()){
            alert("Form Submit Successfully");
        }
    }

    return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">
                Name
            </label>
            <input type="text"
            name="name"
            className="form-control"
            id="name"
            onChange={(e) => setValues({...values,name:e.target.value}) } />
        </div>
        {
            errors.name &&
            <span style={style}>
                {errors.name}
            </span>
        }
        <div className="mb-3 mt-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={(e) => setValues({...values,email:e.target.value}) }/>

        </div>
        {
            errors.email &&
            <span style={style}>
                {errors.email}
            </span>
        }
        <div className="mb-3">
            <label htmlFor="userName" className="form-label">
                UserName
            </label>
            <input type="text" name="UserName" className="form-control" id="userName"
            onChange={(e) => setValues({...values,userName:e.target.value}) }
            />
        </div>
        {
            errors.userName &&
            <span style={style}>
                {errors.userName}
            </span>
        }
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
                Password
            </label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1"
            onChange={(e) => setValues({...values,password:e.target.value}) }
                        />
        </div>
        {
            errors.password &&
            <span style={style}>
                {errors.password}
            </span>
        }
        <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
                Confirm Password
            </label>
            <input type="password" name="rePassword" className="form-control" id="exampleInputPassword2"
            onChange={(e) => setValues({...values,rePassword:e.target.value}) }
            />
        </div>
        {
            errors.rePassword &&
            <span style={style}>
                {errors.rePassword}
            </span>
        }
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );
}

export default Register;