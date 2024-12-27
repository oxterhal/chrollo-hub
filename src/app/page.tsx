import Header from "./components/header";
import Dimtxy from "./components/dimtxy";
import Banner from "./components/banner";
import Home from "./components/home";
import Footer from "./components/footer";
export default function main() {
  return (
    <div className="w-screen h-screen">
      <Dimtxy />
      <Header />
      <Banner />
      <Home />
      <Footer></Footer>
    </div>
  );
}
