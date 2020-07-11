import React from "react";
import "./Card.css";

interface CardImg {
  image: string;
  alt: string;
}

interface CardWithChildren {
  children: React.ReactNode;
}

interface CardTitle {
  title: string;
}

interface CardText {
  text: string;
}

export const CardImg = ({ image, alt }: CardImg) => (
  <img src={image} alt={alt} className="card-img-top" />
);

export const CardBody = ({ children }: CardWithChildren) => (
  <div className="card-body">{children}</div>
);

export const CardTitle = ({ title }: CardTitle) => (
  <h5 className="card-title">{title}</h5>
);

export const CardText = ({ text }: CardText) => (
  <p className="card-text">{text}</p>
);

export const Card = ({ children }: CardWithChildren) => (
  <div className="card">{children}</div>
);
