import ContextProvider from "./components/context-provider/context-provider";
import Advices from "./components/advices/advices";

function App() {
  return (
    <ContextProvider>
      <Advices />
    </ContextProvider>
  );
}

export default App;
