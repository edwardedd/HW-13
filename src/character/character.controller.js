import React from 'react';
import Axios from 'axios';

const CharacterAPI = Axios.create({
  baseURL: "https://rickandmortyapi.com/api/character/",
  headers: {
      Accept: 'application/json', 'Content-Type': 'application/json'
  }
})
 
console.log(CharacterAPI)

export  default class Character extends React.Component{
  constructor(props) {
      super(props);
      this.pageLoad = 1;
  }