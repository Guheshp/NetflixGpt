const signInFormValidation = (eamil, password, name) => {
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(eamil);
    const ispassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isName = /^[a-zA-Z\s]+$/.test(name);

    if (!isEmail) return "Please Enter Valid Email"
    if (!isName) return "Name should be string"
    if (!ispassword) return "Please Enter Valid Password"


    return null;

}

export default signInFormValidation;