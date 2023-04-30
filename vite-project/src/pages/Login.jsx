import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { supabase } from "../lib/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { setUser } from "../redux/userSlice";

const Login = () => {
  const rmailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleLogin = async () => {
  //   const {
  //     data: { user, error },
  //   } = await supabase.auth.signIn({
  //     email: rmailRef.current.value,
  //     password: passwordRef.current.value,
  //   });

  //   if (error) {
  //     toast.error(error.message);
  //     return;
  //   }

  //   if (user) {
  //     toast.success("Login successful");
  //     dispatch(setUser(user));
  //     navigate("/");
  //   }
  // };

  const handleLogin = async () => {
    const {
      data: { user, error },
    } = await supabase.auth.signIn({
      email: rmailRef.current.value,
      password: passwordRef.current.value,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    if (user) {
      toast.success("Login successful");
      dispatch(setUser(user));
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="email" ref={rmailRef} />
      <input type="password" placeholder="password" ref={passwordRef} />
      <button onClick={handleLogin}>Login</button>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google", "github"]}
        socialColors={true}
        socialButtonSize="medium"
        socialLayout="vertical"
        socialButtonStyle="icon"
        view="sign_in"
        onSuccess={() => {
          handleLogin();
        }}
        
      />
    </div>
  );
};

export default Login;
