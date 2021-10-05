import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Languge from "./pages/Languge";
import English from "./pages/English";
import Informatique from "./pages/Informatique";
import Translate from "./pages/Translate";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const quizListInformatique = [
    { correctAnswer: 3, question: "1+2=", a: 1, b: 3, c: 2 },
    { correctAnswer: 4, question: "1+3=", a: 4, b: 3, c: 2 },
    { correctAnswer: 5, question: "1+4=", a: 1, b: 3, c: 5 },
  ];
  const quizListEnglish = [
    {
      correctAnswer: "cause ",
      question: "Synonyms of Induce",
      a: "control",
      b: "clean",
      c: "cause ",
    },
    {
      correctAnswer: "shocked ",
      question: "Synonyms of horrified ",
      a: "shocked ",
      b: "ashamed",
      c: "surprised ",
    },
    {
      correctAnswer: "beverages",
      question: "Synonyms of drinks ",
      a: "packages",
      b: "beverages ",
      c: "desserts",
    },
    {
      correctAnswer: "trend ",
      question: "Synonyms of tendency ",
      a: "trend ",
      b: "prejudice",
      c: "rumor",
    },
    {
      correctAnswer: "an adjective, a verb and an other adverb ",
      question: "What does an adverb describe ?",
      a: "a noun",
      b: "an adjective, a verb and an other adverb ",
      c: "a verb, a noun , an adverb, a preposition and an adjective ",
    },
    {
      correctAnswer: "coordinating conjunctions ",
      question: "what are FANBOYS(for and nor but or yet so)?",
      a: "coordinating conjunctions ",
      b: "subordinating conjunctions",
      c: "both",
    },
    {
      correctAnswer:
        "words that have the same pronounciation but different meanings and sometimes they are spelled differently ",
      question: "homophones are ",
      a: "words that have the same meaning but a different pronounciation",
      b: "words that have the same pronounciation but have different meanings ",
      c: "words that have the same pronounciation but different meanings and sometimes they are spelled differently ",
    },
    {
      correctAnswer: "on",
      question: "Let’s go … vacation",
      a: "to",
      b: "on",
      c: "for",
    },
    {
      correctAnswer: "I don’t have money ",
      question: "i’m broke means ",
      a: "I don’t have money ",
      b: "i am hurt and my heart is broken",
      c: "i am tired and i broke my leg ",
    },
    {
      correctAnswer: "go to sleep ",
      question: "Hit the sack means ",
      a: "hit the rock ",
      b: "hit the bag",
      c: "go to sleep ",
    },
  ];
  const quizListTranslate = [
    {
      correctAnswer: "To be very angry ",
      question: "to see red ",
      a: "To see s.o/sth you love",
      b: "To see a red thing",
      c: "To be very angry ",
    },
    {
      correctAnswer: "To feel sad",
      question: "to feel blue ",
      a: "To feel sick",
      b: "To feel sad",
      c: "To feel anger",
    },
    {
      correctAnswer: "arrive",
      question: "I’ll cal you AS SOON AS I … ",
      a: "have arrived ",
      b: "will arrive ",
      c: "arrive",
    },
    {
      correctAnswer: "were",
      question: "If I ….. you , I would never let him go ",
      a: "am",
      b: "were",
      c: "will be",
    },
    {
      correctAnswer:
        "refers to how words go together or form fixed relationships",
      question: "Collocation in translation ",
      a: "refers to how words go together or form fixed relationships",
      b: "refers to a good translation",
      c: "refers to how words are meaningless ",
    },
  ];

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home {...props} quizListInformatique={quizListInformatique} />
          )}
        />
        <Route exact path="/languge" component={Languge} />
        <Route
          path="/languge/english"
          render={() => <English quizListEnglish={quizListEnglish} />}
        />
        <Route
          path="/languge/translate"
          render={() => <Translate quizListTranslate={quizListTranslate} />}
        />
        <Route path="/informatique" component={Informatique} />
      </Switch>
    </div>
  );
}

export default App;
