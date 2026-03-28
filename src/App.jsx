import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-950 via-black to-black">
      <Header />
      <Form />
    </div>
  );
};

export default App;
