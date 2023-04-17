import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Input from "../component/input";
import Axios from "axios";
import authService from "../services/auth.service";

const Question = () => {
    const [allQuestion, setAllQuestion] = useState([]);
    const [allComment, setAllComment] = useState([]);
    const [inputComment, setInputComment] = useState([]);
    const [newQuestion, setNewQuestion] = useState([]);
    const state = {
      currentUser: authService.getCurrentUser()
  }
  const {currentUser} = state;
    const handleChange = (e, i) => {
      setInputComment({
        values: { ...inputComment.values, [i]: e.target.value }
      });
      console.log(inputComment)
    }

    const handleComment = async (questionid, message) => {
      await Axios
          .post("http://localhost:8080/api/comment", {
            questionid : questionid,
            comment : message,
            bywho : currentUser.firstname + " " + currentUser.lastname
          })
          .then((res) => {
            alert('comment success')
            console.log(res.data)
          })
          .catch((err) => {
            console.log(err);
          });
    }
    const handlePost = async () => {
      await Axios
          .post("http://localhost:8080/api/question", {
            question : newQuestion,
            whoask : currentUser.firstname + " " + currentUser.lastname
          })
          .then((res) => {
            alert('Post success')
            console.log(res.data)
          })
          .catch((err) => {
            console.log(err);
          });
    }
    const getQuestions = async () => {
        await Axios
          .get("http://localhost:8080/api/question")
          .then((res) => {
            console.log(res.data)
            setAllQuestion(res.data);
            // setAllInputComment(res.data);
            for (let i=0; i< inputComment.length;i++){
              inputComment[i].message = ""
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
      const getComments = async () => {
        await Axios
          .get("http://localhost:8080/api/comment")
          .then((res) => {
            console.log(res.data)
            setAllComment(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    useEffect(()=>{
        getQuestions();
        getComments();
    }, [])
    return ( <div><Navbar/>
    <div className="p-20">
        <h1 className="text-6xl">Question</h1>
        <div class="my-6 flex">
        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-3/4 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ถามคำถามที่สงสัย" required
        value={newQuestion}
        onChange={(v) => setNewQuestion(v.target.value)}
        />
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded ml-4" onClick={handlePost}>
  Post
</button>
    </div>
        <div>
            {allQuestion.map((question, index) => (
                <div className="mt-8 w-1/2 bg-slate-50 px-8 py-8 rounded-lg border" key={question.id}>
                <div>
                <h1 className="text-2xl">{index+1+"."} {question.question}</h1>
                <p className="text-slate-400 text-2xl">โดย {question.whoask}</p>
                </div>
                {allComment.filter(comment => comment.questionid == question.id).map((comment, index) => (
                  <div className="comment ml-6 mt-3">
                  <h3 className="text-lg font-semibold">{comment.bywho}</h3>
                  <p>{comment.comment}</p>
              </div>
                ))}
                <div className="ml-6 mt-3 w-1/2 flex">
                <Input
                value={inputComment.values[index]}
                onChange={(v) => handleChange.bind(v.target.value, index)}
                key={question.id}
                />
                <button
                type="submit"
                className="bg-blue-500 py-2 rounded-lg text-white hover:bg-blue-600 active:bg-blue-700 w-24 px-4 h-10 mt-2"
                onClick={() => handleComment(question.id, inputComment.values[index])}
              >
                Comment
              </button>
                </div>
            </div>
            ))}
        </div>

    </div>
    </div>
     );
}

export default Question;
