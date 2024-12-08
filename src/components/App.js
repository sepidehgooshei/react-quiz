import { useQuiz } from "../contexts/QuizContext";
import Error from "./Error";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Question from "./Question";
import StartScreen from "./StartScreen";
import Timer from "./Timer";
import FinishScreen from "./FinishScreen";
export default function App(params) {
    const {status} = useQuiz()
    return(
        <div className="app">
            <Header/>
        <Main>
            {status === "loader" &&  <Loader/>}
            {status === "error" && <Error/>}
            {status === "ready" && <StartScreen/>}
            {status === "active" && (
              <>
                  <Progress/>
                  <Question/>
                  <Footer>
                  <Timer/>
                  <NextButton/>
                  </Footer>
              </>
            )}
            {status === "finished" && <FinishScreen/>}
            
        </Main>
        </div>
    )
}