import { addDoc, collection } from "firebase/firestore";
import { useState, useCallback } from "react";
import { db } from "../firebase";
import toast from "react-hot-toast";

const ref = collection(db, "posts");
const AddPost = () => {
  const [body, setBody] = useState("");
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (body.trim() !== "") {
        try {
          await addDoc(ref, {
            body: body,
          });
          toast.success("Post Eklendi");
          setBody(""); //
        } catch (error) {
          toast.error("Post Eklerken Hata Oluştu: ", error);
        }
      } else {
        toast.error("Lütfen bir şeyler yazın!");
      }
    },
    [body]
  );
  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <input
          type="text"
          placeholder="Dilediğiniz Postu Ekleyin"
          className="bg-gray-100 p-4 rounded-t-md"
          value={body}
          onChange={(e) => setBody(e.currentTarget.value)}
        ></input>
        <input
          type="submit"
          value="Ekle"
          className="bg-red-200 p-4 rounded-b-md"
        ></input>
      </form>
    </div>
  );
};

export default AddPost;
