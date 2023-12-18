import axios from "axios";
import { useRouter } from "next/navigation";
import { read_cookie } from "sfcookies";

const useAuth = () => {
  const router = useRouter();

  const axiosReq = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    timeout: 100000,
    headers: { authorization: read_cookie("token") as string },
  });

  const handleLoginButton = async (loginObj: any) => {
    try {
      const { data } = await axiosReq.post(`/login`, loginObj, {
        withCredentials: true,
      });
      console.log(data);
      router.push("/chat");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignupButton = async (signupObj: any) => {
    try {
      const { data } = await axiosReq.post(`/signup`, signupObj, {
        withCredentials: true,
      });
      console.log(data);
      router.push("/chat");
    } catch (error) {
      console.log(error);
    }
  };

  return { handleLoginButton, handleSignupButton };
};

export default useAuth;
