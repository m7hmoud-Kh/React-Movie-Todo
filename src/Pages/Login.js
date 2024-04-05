import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
    <Formik
    initialValues={{email:"",password:""}}
    validate={(values) => {
        const errors = {};
        if (!values.email) {
        errors.email = "Required";
        } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
        errors.email = "Invalid email address";
        }

        if(values.password.length < 7){
            errors.password = "Password must be 8 char"
        }
        if (!values.password) {
            errors.password = "Required";
        }
        return errors;
    }}
    onSubmit={(values, {setSubmitting}) =>{
        alert(JSON.stringify(values,null,2));
        setSubmitting(false);
    }}
    >
        {({ errors}) => (
        <Form method='POST'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                </label>
                <Field type="email" className="form-control" name="email" placeholder="Type Your Email"  />
                {errors.email && <p className='alert alert-danger'>{errors.email}</p>}
            </div>
            <div className='mb-3'>
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <Field type="password"  className="form-control" name="password" placeholder="Type Your Password"  />
                {errors.password && <p className='alert alert-danger'>{errors.password}</p>}
            </div>
            <div className='mb-3'>
                <Link to="/register" >don't have account, Register Now</Link>
            </div>
            <button type="submit" className='btn btn-success' >
                Submit
            </button>
        </Form>
        )}
    </Formik>
    );
}

export default Login;