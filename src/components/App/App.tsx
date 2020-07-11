import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { FormGroup } from "../FormGroup/FormGroup";
import { Label } from "../Label/Label";
import { Select } from "../Select/Select";
import { Card, CardImg, CardBody, CardTitle, CardText } from "../Card/Card";
import { Container } from "../Container/Container";
import Loading from "../Loading/Loading";

import "./App.css";

// import { results } from "../../data/data.json";

import { Result } from "../../interfaces/interfaces";

import {
  filterByStatus,
  filterByEpisode,
  filterByGender,
  generateArrayofEpisodes,
  fetchData,
} from "../../utils/index";

import { handleEvent } from "./handlers/index";

const App = () => {
  const [characters, setCharacters] = useState<Result[]>([]);
  const [rawCharacters, setRawCharacters] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character/").then((data) => {
      setLoading(false);
      setCharacters(data.results);
      setRawCharacters(data.results);
    });
  }, []);

  return (
    <Container>
      <FormGroup>
        <Label label="Status" />
        <div>
          <Button
            data-testid="all-status"
            name="Todos"
            handleClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleEvent(e, "", filterByStatus, rawCharacters, setCharacters)
            }
          />
          <Button
            name="Vivo"
            handleClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleEvent(
                e,
                "Alive",
                filterByStatus,
                rawCharacters,
                setCharacters
              )
            }
          />
          <Button
            name="Morto"
            handleClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleEvent(
                e,
                "Dead",
                filterByStatus,
                rawCharacters,
                setCharacters
              )
            }
          />
          <Button
            name="Desconhecidos"
            handleClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleEvent(
                e,
                "unknown",
                filterByStatus,
                rawCharacters,
                setCharacters
              )
            }
          />
        </div>
      </FormGroup>

      <FormGroup>
        <Label label="Sexo" />
        <div>
          <Button
            name="Todos"
            handleClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleEvent(e, "", filterByGender, rawCharacters, setCharacters)
            }
          />
          <Button
            name="Homem"
            handleClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleEvent(
                e,
                "Male",
                filterByGender,
                rawCharacters,
                setCharacters
              )
            }
          />
          <Button
            name="Mulher"
            handleClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleEvent(
                e,
                "Female",
                filterByGender,
                rawCharacters,
                setCharacters
              )
            }
          />
          <Button
            name="Desconhecido"
            handleClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleEvent(
                e,
                "unknown",
                filterByGender,
                rawCharacters,
                setCharacters
              )
            }
          />
        </div>
      </FormGroup>

      <FormGroup>
        <Label label="Episódio" />
        <Select
          options={generateArrayofEpisodes(15)}
          filterFunction={filterByEpisode}
          rawData={rawCharacters}
          setStateFunction={setCharacters}
          handleChange={handleEvent}
        />
      </FormGroup>

      {loading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : null}

      <section className="grid">
        {characters.map((character) => (
          <Card key={character.id} data-testid="character">
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
};

export default App;
