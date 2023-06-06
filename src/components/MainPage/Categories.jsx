import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Mode",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Électronique",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Voitures",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Maison & Jardin",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Cadeaux",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Musique",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Santé & Beauté",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Animaux domestiques",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Jouets pour bébé",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Épiceries",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Livres",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
