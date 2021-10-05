import React from "react"
import CarouselContainer from "../Carousel/CarouselContainer"
import SearchBar from "../SearchBar/SearchBar"
import Services1 from "../Services/Services1"

const Home = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <CarouselContainer></CarouselContainer>
      <Services1></Services1>
    </div>
  )
}

export default Home
