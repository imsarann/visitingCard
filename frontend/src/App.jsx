// App.jsx
import AboutOurCompany from "./components/AboutOurCompany";
import CallSvg from "./components/CallSvg";
import Card from "./components/Card";
import FirstContact from "./components/FirstContact";
import Footer from "./components/Footer";
import OurServices from "./components/OurServices";
import Stats from "./components/Stats";
import SvgGradientDivider from "./components/SvgGradientDivider ";
import Title from "./components/Title";
import Why from "./components/Why";

export default function App() {
  return (
    <div className="min-h-screen font-Lora bg-yellow-50 bg-dots bg-fixed flex flex-col items-center relative overflow-hidden">
      <SvgGradientDivider />

      <div>
        <Title text={"SARAN"} />
      </div>
      <div>
        <AboutOurCompany />
      </div>
      <div>
        <OurServices />
      </div>
      <Why />
      <div>
        <Stats />
      </div>
      <div>
        <Footer />
      </div>
     
    </div>
  );
}
