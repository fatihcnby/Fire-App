import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Posts from "../components/Posts";
import AddPost from "../components/AddPost";
import toast from "react-hot-toast";

const Home = () => {
  const [user, isLoading] = useAuthState(auth);
  const handleSignOut = useCallback(() => {
    signOut(auth);
    toast.error("Çıkış Yapıldı");
  }, []);

  if (isLoading) {
    return <h1>Yükleniyor...</h1>;
  }
  return (
    <div className="max-w-md py-12 mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl">{user.displayName}</p>
          <p className="text-lg text-gray-700">{user.email}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="p-4 cursor-pointer bg-red-400 rounded-md"
        >
          Çıkış Yap
        </button>
      </div>
      <AddPost />
      <Posts />
    </div>
  );
};

export default Home;
