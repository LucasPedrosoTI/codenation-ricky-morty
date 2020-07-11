import React, { useState, useEffect } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { FormGroup } from "./components/FormGroup/FormGroup";
import { Label } from "./components/Label/Label";
import { Select } from "./components/Select/Select";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "./components/Card/Card";
import { Container } from "./components/Container/Container";

import { results } from "../src/data/data.json";
import Loading from "./components/Loading/Loading";

import { Result } from "../src/interfaces/interfaces";
import {
  filterByStatus,
  filterByEpisode,
  filterByGender,
} from "../src/utils/index";

const generateArrayofEpisodes = (num: number): number[] => {
  const arrayOfepisodes: number[] = [];
  for (let i = 1; i <= num; i++) arrayOfepisodes.push(i);
  return arrayOfepisodes;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<Result[]>([]);

  useEffect(() => {
    setTimeout(() => {
      if (!results) return null;
      setLoading(false);
      setCharacters(results);
    }, 1000);
  }, []);

  const handleClickStatus = (e: Event, status: string) => {
    e.preventDefault();
    const filteredChars = filterByStatus(results, status);

    return status ? setCharacters(filteredChars) : setCharacters(results);
  };

  const handleChangeEpisode = (episode: string) => {
    if (episode === "Selecione um episódio") {
      return setCharacters(results);
    }

    const filteredChars = filterByEpisode(results, episode);

    return setCharacters(filteredChars);
  };

  const handleClickGender = (e: Event, gender: string) => {
    e.preventDefault();
    const filteredChars = filterByGender(results, gender);

    return gender ? setCharacters(filteredChars) : setCharacters(results);
  };

  return (
    <Container>
      <FormGroup>
        <Label label="Status" />
        <div>
          <Button
            name="Todos"
            handleClick={(e: any) => handleClickStatus(e, "")}
          />
          <Button
            name="Vivo"
            handleClick={(e: any) => handleClickStatus(e, "Alive")}
          />
          <Button
            name="Morto"
            handleClick={(e: any) => handleClickStatus(e, "Dead")}
          />
          <Button
            name="Desconhecidos"
            handleClick={(e: any) => handleClickStatus(e, "unknown")}
          />
        </div>
      </FormGroup>

      <FormGroup>
        <Label label="Sexo" />
        <div>
          <Button
            name="Todos"
            handleClick={(e: any) => handleClickGender(e, "")}
          />
          <Button
            name="Homem"
            handleClick={(e: any) => handleClickGender(e, "Male")}
          />
          <Button
            name="Mulher"
            handleClick={(e: any) => handleClickGender(e, "Female")}
          />
          <Button
            name="Desconhecido"
            handleClick={(e: any) => handleClickGender(e, "unknown")}
          />
        </div>
      </FormGroup>

      <FormGroup>
        <Label label="Episódio" />
        <Select
          options={generateArrayofEpisodes(15)}
          handleChange={handleChangeEpisode}
        />
      </FormGroup>

      {loading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : null}

      <section className="grid">
        {characters.map((character) => (
          <Card key={character.id}>
            <CardImg image={character.image} alt={character.name} />
            <CardBody>
              <CardTitle title={character.name} />
              <CardText text={"Situação: " + character.status} />
              <CardText text={"Sexo: " + character.gender} />
            </CardBody>
          </Card>
        ))}
      </section>
    </Container>
  );
}

export default App;
