import Header from "@/sections/Header";
import Challenges from "@/sections/Challenges";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <>
      <div className="relative">
        <Header />
        <Challenges />
      </div>
      <Toaster />
    </>
  );
};

export default App;
