import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './Pages/UserForm'
import { Provider } from 'react-redux'
import { store } from './Store'
import TwailwindOne from './Tailwind/TwailwindOne'
import MarginPadding from './Tailwind/MarginPadding'
import Width from './Tailwind/Width'
import { Height } from './Tailwind/height'
import Size from './Tailwind/Size'
import Potitions from './Tailwind/Potitions'
import Container from './Tailwind/Container'
import Background from './Tailwind/Background'
import FilterImages from './Tailwind/FilterImages'
import IntrectivityClasses from './Tailwind/IntrectivityClasses'
import MediaQuery from './Tailwind/MediaQuery'
import Columns from './Tailwind/Columns'
import Flex from './Tailwind/Flex'
import GridClasses from './Tailwind/GridClasses'


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
    <GridClasses/>
   </Provider>
   
    </>
  )
}

export default App
