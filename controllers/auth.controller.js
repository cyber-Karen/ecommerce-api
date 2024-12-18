import AuthService from "../services/auth.service.js";
const {registerUser} = new AuthService();

export default class AuthController{
    async registerUser(req, res, next){
        try {

            const {password , email, name } = req.body
            //const { ...userData} = req.body

            if(!password || !name || !email){
                throw new Error("Please provide all the required field");
            }
           

           const user = await registerUser(req.body)
           res.status(201).json("successful registration",);
           console.log(user);

        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}
