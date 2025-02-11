import React from 'react'
import ProductCard from '../components/ProductCard'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "3rem",
      margin: "3rem",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    }}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Box>
  )
}

export default Home