import React from "react"
import About from "../About/About"
import CarouselContainer from "../Carousel/CarouselContainer"
import SearchBar from "../SearchBar/SearchBar"
import Services from "../Services/Services"

const Home = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <CarouselContainer></CarouselContainer>
      <Services></Services>
    </div>
  )
}

export default Home
