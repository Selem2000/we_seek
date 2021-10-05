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
    {
      correctAnswer: 1024,
      question: "How many bytes are in a KB (kilobyte)?",
      a: 1000,
      b: 2048,
      c: 1024,
    },
    {
      correctAnswer: "A set of steps of how to resolve a certain problem.",
      question: "An algorithm is",
      a: "A programming language",
      b: "A set of steps of how to resolve a certain problem",
      c: "A program",
    },
    {
      correctAnswer: "a:=5",
      question:
        "Select the correct form of assignment to an integer variable a",
      a: "a:5",
      b: "a=5",
      c: "a:=5",
    },
    {
      correctAnswer: "Relational",
      question: "What is the type of this operation : 5<=4",
      a: "Arithmetic",
      b: "Relational",
      c: "Boolean",
    },
    {
      correctAnswer: "CPU",
      question: "The brain of any computer system is",
      a: "CPU",
      b: "ALU",
      c: "RAM",
    },
    {
      correctAnswer: "Assembler",
      question:
        "A program that converts assembly language to machine language is called",
      a: "Compiler",
      b: "Interpreter",
      c: "Assembler",
    },
    {
      correctAnswer: "American standard code for information interchange",
      question: "ASCII means",
      a: "American security code for information interchange",
      b: "American standard code for information interchange",
      c: "American Scientific code for information interchange",
    },
    {
      correctAnswer: "ROM",
      question: "Which of the following memories is non-volatile",
      a: "ROM",
      b: "DRAM",
      c: "RAM",
    },
    {
      correctAnswer: "Bug",
      question: "An error is also called",
      a: "Bug",
      b: "DeBug",
      c: "None of the above is true",
    },
    {
      correctAnswer: "Graphical User Interface",
      question: "GUI means",
      a: "Graphical User Interface",
      b: "Graphical Universal Interface",
      c: "Graphical Unique Interface",
    },
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
