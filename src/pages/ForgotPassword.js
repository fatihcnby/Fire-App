import { sendPasswordResetEmail } from "firebase/auth";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email) {
        return;
      }
      sendPasswordResetEmail(auth, email)
        .then(() => {toast.success("Şifre Sıfırlama Maili Gönderildi.Posta kutunuzu kontrol edin.");})
        .catch((e) => {console.log(e)});
    },
    [email]
  );
  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl">Şifremi Unuttum</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
        <input
          type="email"
          placeholder="E-posta Adresini Gir"
          className="p-4 bg-gray-100 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        ></input>
        <input
          type="submit"
          placeholder="Send reset password email"
          className="p-4 bg-indigo-400 rounded-md cursor-pointer"
        ></input>
        <Link to="/sign-in">Giriş Sayfasına Geri Dön</Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
