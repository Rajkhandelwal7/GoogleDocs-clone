import Image from "next/Image"
import Button from "@material-tailwind/react/Button";
import { signIn } from "next-auth/client";
function Login() {
    return (
        <div className="flex flex-col  items-center justify-center min-h-screen py-2">
           <img src="https://links.papareact.com/1ui" alt="" height="200" width="550"/>
           <Button onClick={signIn} color="lightBlue" ripple="light" className="mt-10 w-44">SIGNIN</Button>
        </div>
    )
}

export default Login
// 319561006560-sll446qta58r9qot2l8j0ppijm0ehsdh.apps.googleusercontent.com
// wwGS3Ajw8E7Sl_aE2NfFsYCv