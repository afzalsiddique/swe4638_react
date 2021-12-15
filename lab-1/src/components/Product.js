import React from "react";

export function Product(props) {
  return (
    <>
      <img src={props.imageUrl} width="175" height="250"/>,
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p><font size="4"> Submitted By: <img src={props.submitter} width="50" height="50"/></font></p>
      <hr/>
    </>
  )
}