import { signInWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) {
        return;
      }
      signInWithEmailAndPassword(auth, email, password).catch((e) => {
        console.log(e);
      });
      toast.success("Giriş Yapıldı");
    },
    [email, password]
  );
  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl ">Giriş Yap</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
        <input
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          type="email"
          placeholder="E- Posta Adresini Gir"
          className="p-4 bg-gray-100 rounded-md"
        ></input>
        <input
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
          type="password"
          placeholder="Şifreni Gir"
          className="p-4 bg-gray-100 rounded-md"
        ></input>
        <Link to="/forgot-password" className="ml-auto">
          Şifremi Unuttum
        </Link>
        <input
          type="submit"
          className="p-4 bg-red-400 rounded-md cursor-pointer"
          value="Giriş Yap"
        ></input>
        <Link to="/sign-up">Hesabınız Yok mu? Kayıt Ol</Link>
      </form>
    </div>
  );
};

export default SignIn;
