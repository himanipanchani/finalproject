import bcrypt from 'bcrypt'
import userModel from '../model/user.model.js';
// import errorHandler from '../services/errorHandler.js';

const userController = {
    async SignUp(req,res,next){
        const { name, email, password } = req.body;

        const hashpassword = await bcrypt.hash(password, 10);

        try{
            const user = new userModel({name, email,password: hashpassword})
            await user.save();

            res.status(201).json("User Create Successfull..")
        }catch(err){
            console.log(err);
        }
    },
    async SignIn(req, res, next) {
        const { email, password } = req.body;
    
        try {
            const validUser = await userModel.findOne({ email });
            // if (!validUser) {
            //     return next(errorHandler.alreadyExist("Email not valid..."));
            // }
            console.log(validUser);
    
            const validPassword = await bcrypt.compare(password, validUser.password);
            // if (!validPassword) {
            //     return next(errorHandler.wrongCredentials("Password not valid..."));
            // }
            console.log(validPassword);
    
            res.status(200).json({ message: 'Signin successfull!' });
        } catch (err) {
            console.log(err);
            next(err); 
        }
    }
    
}

export default userController;