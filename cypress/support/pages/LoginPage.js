import Common from '../functions/Common'

class LoginPage {

    constructor() {
        this.obj = new Common();

    }




    enter_Credentials(username, password) {
        // console.log('firstname'+firstName)
        this.obj.set_Value("[id='session_email']", username)
        this.obj.set_Value("[id='session_password']", password)

    }


    clickLogin() {
        this.obj.click("[name='commit']")
    }

}

export default LoginPage;