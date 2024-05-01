import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) {
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          updateProfile(auth.user, { displayName: name });
          toast.success("Hesap Oluşturuldu");
        })

        .catch((e) => {
          console.log(e);
        });
    },
    [name, email, password]
  );

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl ">Yeni Hesap Oluştur</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
        <input
          className="p-4 bg-gray-100 rounded-md"
          type="text"
          placeholder="Adın Gir"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        ></input>
        <input
          className="p-4 bg-gray-100 rounded-md"
          type="email"
          placeholder="E-Posta Adresini Gir"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        ></input>
        <input
          className="p-4 bg-gray-100 rounded-md"
          type="password"
          placeholder="Şifreni Gir"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        ></input>
        <input
          className="p-4 bg-green-400 rounded-md cursor-pointer"
          type="submit"
          value="Kayıt Ol"
        ></input>
        <Link to="/sign-in">Zaten Bir Hesabın Var mı? Giriş Yap</Link>
      </form>
    </div>
  );
};

export default SignUp;
