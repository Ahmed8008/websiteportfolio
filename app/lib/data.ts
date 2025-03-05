import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import MovieReview from "/public/MovieReview.png";
import LesvestieHair from "/public/LesvestieHair.png";
import EliteSportswear from "/public/EliteSportswear.png";
import inventorymangemnetsystem from "/public/inventorymangemnetsystem.png";
import CarHub from "/public/CarHub.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Levesti Hair",
    description:
    "Ahmed offered me a very nice website at a good price. He is a very active listener and I thank him for that. He is very passionate about sin and that is remarkable. If you want your website, he is the one to go to.", 
  },
  {
    title: "Movie Review and Rating Platform",
    description: "Exceptionally quick and attentive, delivered outstanding results that left me beyond satisfied.",
  },
  {
    title: "Inventory Mangement System",
    description:
      "Impressively swift and spot-on, exceeded expectations with flawless execution. Delighted with the results and eager to collaborate again. Highly recommended for a seamless experience!",
  
  },
  {
    title: "Car Hub",
    description:
      "Superbly efficient and precise, nailed the task effortlessly. Thrilled with the outcome and already planning the next venture. Highly recommend this top-notch service!",
   
  },
 

] as const;

export const projectsData = [
  {
    title: "LeVestie Hair",
    description:
      "LeVestie Hair – Where style meets elegance. Elevate your look with our expert hair care, tailored just for you. Book your appointment today and experience luxury like never before!.",
    tags: ["HTML", "CSS", "Bootstrap"],
    imageUrl: LesvestieHair,
    link:"https://levestihair.com/",
  },
    {
    title: "Elite Sports Wear",
    description:
      "EliteSportswear offers premium, stylish sportswear designed for performance and comfort. Explore our collection for athletes of all levels, featuring high-quality fabrics and modern designs.",
    tags: ["Wordpress", "Elementor", "php"],
    imageUrl: EliteSportswear,
    link:"https://elitesportswear.co.uk/",
  },
  {
    title: "Movie Review and Rating Platform",
    description:
      "A platform for discovering, reviewing, and rating movies, where users share opinions and explore top-rated films.",
    tags: ["HTML", "TailwindCSS", "NextJs","TypeScript","Neom Db"],
    imageUrl: MovieReview,
    link:"https://movie-review-rouge.vercel.app/",
  },
  {
    title: "Inventory Mangement System",
    description:
      " An Inventory Management System (IMS) is an essential tool for businesses of all sizes to effectively oversee their inventory operations tracking, managing, and optimizing.",
      tags: ["HTML", "CSS", "ASP DOT NET", "C#", "JavaScript","SQL Server"],
    imageUrl: inventorymangemnetsystem,
    link:"http://inventorymangementsystem.somee.com/Accounts/SignIn",
  },
  {
    title: "Car Hub",
    description:
      "Car Hub is your one-stop destination for everything automotive! From buying and selling cars to expert reviews and maintenance tips, we cover all your car-related needs. Drive smarter with Car Hub!",
      tags: ["HTML", "TailwindCSS", "NextJs", "Typescript", "JavaScript","NeomDb"],
    imageUrl: CarHub,
    link:"https://car-hub-iota-orpin.vercel.app/?vercelToolbarCode=Q5F7PZ2GLkPlk45",
  },
  
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "TailWind Css",
  "React",
  "NextJs",
  "ASP DOT NET",
  "Entity framework",
  "C#",
  "Web Api",
  "SQL Server",
  "MongoDB",
  "Framer Motion",
] as const;
