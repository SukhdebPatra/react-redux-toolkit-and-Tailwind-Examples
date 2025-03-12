import { useState } from "react";

import "./App.css";
import UserForm from "./Pages/UserForm";
import { Provider } from "react-redux";
import { store } from "./Store";
import TwailwindOne from "./Tailwind/TwailwindOne";
import MarginPadding from "./Tailwind/MarginPadding";
import Width from "./Tailwind/Width";
import { Height } from "./Tailwind/height";
import Size from "./Tailwind/Size";
import Potitions from "./Tailwind/Potitions";
import Container from "./Tailwind/Container";
import Background from "./Tailwind/Background";
import FilterImages from "./Tailwind/FilterImages";
import IntrectivityClasses from "./Tailwind/IntrectivityClasses";
import MediaQuery from "./Tailwind/MediaQuery";
import Columns from "./Tailwind/Columns";
import Flex from "./Tailwind/Flex";
import GridClasses from "./Tailwind/GridClasses";
import TransitionAndTransform from "./Tailwind/TransitionAndTransform";
import AnimationClasses from "./Tailwind/AnimationClasses";
import ScreenAndBrekPoints from "./Tailwind/ScreenAndBrekPoints";
import MarginAndPading from "./Tailwind/MarginAndPading";
import DarkMode from "./Tailwind/DarkMode";
import DirectivesImp from "./Tailwind/DirectivesImp";
import TailwindButton from "./Tailwind/TailwindButton";
import FontFamily from "./Tailwind/FontFamily";
import PhotoGalary from "./Tailwind/PhotoGalary";
import DialogBox from "./Tailwind/DialogBox";
import GoogleUiClone from "./Tailwind/GoogleUiClone";
import PortFolio from "./Pages/PortFolio";

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <UserForm/> */}
        {/* <TwailwindOne/> */}
        {/* <MarginPadding/> */}
        {/* <Width/> */}
        {/* <Height/> */}
        {/* <Size/> */}
        {/* <Potitions/> */}
        {/* <Container/> */}
        {/* <Background/> */}
        {/* <FilterImages/> */}
        {/* <IntrectivityClasses/> */}
        {/* <MediaQuery/> */}
        {/* <Columns/> */}
        {/* <Flex/> */}
        {/* <GridClasses/> */}
        {/* <TransitionAndTransform/> */}
        {/* <AnimationClasses/> */}
        {/* <ScreenAndBrekPoints /> */}
        {/* <MarginAndPading/> */}
        {/* <DarkMode/> */}
        {/* <DirectivesImp/> */}
        {/* <TailwindButton/> */}
        {/* <FontFamily /> */}
        {/* <PhotoGalary/> */}
        {/* <DialogBox/> */}
        {/* <GoogleUiClone/> */}
        <PortFolio/>
      </Provider>
    </>
  );
}

export default App;
