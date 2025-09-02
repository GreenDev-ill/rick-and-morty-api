import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

// const mock = [
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     type: "",
//     gender: "Male",
//     origin: {
//       name: "Earth (C-137)",
//       url: "https://rickandmortyapi.com/api/location/1",
//     },
//     location: {
//       name: "Citadel of Ricks",
//       url: "https://rickandmortyapi.com/api/location/3",
//     },
//     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//     episode: [
//       "https://rickandmortyapi.com/api/episode/1",
//       "https://rickandmortyapi.com/api/episode/2",
//       "https://rickandmortyapi.com/api/episode/3",
//       "https://rickandmortyapi.com/api/episode/4",
//       "https://rickandmortyapi.com/api/episode/5",
//       "https://rickandmortyapi.com/api/episode/6",
//       "https://rickandmortyapi.com/api/episode/7",
//       "https://rickandmortyapi.com/api/episode/8",
//       "https://rickandmortyapi.com/api/episode/9",
//       "https://rickandmortyapi.com/api/episode/10",
//       "https://rickandmortyapi.com/api/episode/11",
//       "https://rickandmortyapi.com/api/episode/12",
//       "https://rickandmortyapi.com/api/episode/13",
//       "https://rickandmortyapi.com/api/episode/14",
//       "https://rickandmortyapi.com/api/episode/15",
//       "https://rickandmortyapi.com/api/episode/16",
//       "https://rickandmortyapi.com/api/episode/17",
//       "https://rickandmortyapi.com/api/episode/18",
//       "https://rickandmortyapi.com/api/episode/19",
//       "https://rickandmortyapi.com/api/episode/20",
//       "https://rickandmortyapi.com/api/episode/21",
//       "https://rickandmortyapi.com/api/episode/22",
//       "https://rickandmortyapi.com/api/episode/23",
//       "https://rickandmortyapi.com/api/episode/24",
//       "https://rickandmortyapi.com/api/episode/25",
//       "https://rickandmortyapi.com/api/episode/26",
//       "https://rickandmortyapi.com/api/episode/27",
//       "https://rickandmortyapi.com/api/episode/28",
//       "https://rickandmortyapi.com/api/episode/29",
//       "https://rickandmortyapi.com/api/episode/30",
//       "https://rickandmortyapi.com/api/episode/31",
//       "https://rickandmortyapi.com/api/episode/32",
//       "https://rickandmortyapi.com/api/episode/33",
//       "https://rickandmortyapi.com/api/episode/34",
//       "https://rickandmortyapi.com/api/episode/35",
//       "https://rickandmortyapi.com/api/episode/36",
//       "https://rickandmortyapi.com/api/episode/37",
//       "https://rickandmortyapi.com/api/episode/38",
//       "https://rickandmortyapi.com/api/episode/39",
//       "https://rickandmortyapi.com/api/episode/40",
//       "https://rickandmortyapi.com/api/episode/41",
//       "https://rickandmortyapi.com/api/episode/42",
//       "https://rickandmortyapi.com/api/episode/43",
//       "https://rickandmortyapi.com/api/episode/44",
//       "https://rickandmortyapi.com/api/episode/45",
//       "https://rickandmortyapi.com/api/episode/46",
//       "https://rickandmortyapi.com/api/episode/47",
//       "https://rickandmortyapi.com/api/episode/48",
//       "https://rickandmortyapi.com/api/episode/49",
//       "https://rickandmortyapi.com/api/episode/50",
//       "https://rickandmortyapi.com/api/episode/51",
//     ],
//     url: "https://rickandmortyapi.com/api/character/1",
//     created: "2017-11-04T18:48:46.250Z",
//   },
//   {
//     id: 2,
//     name: "Morty Smith",
//     status: "Alive",
//     species: "Human",
//     type: "",
//     gender: "Male",
//     origin: {
//       name: "unknown",
//       url: "",
//     },
//     location: {
//       name: "Citadel of Ricks",
//       url: "https://rickandmortyapi.com/api/location/3",
//     },
//     image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
//     episode: [
//       "https://rickandmortyapi.com/api/episode/1",
//       "https://rickandmortyapi.com/api/episode/2",
//       "https://rickandmortyapi.com/api/episode/3",
//       "https://rickandmortyapi.com/api/episode/4",
//       "https://rickandmortyapi.com/api/episode/5",
//       "https://rickandmortyapi.com/api/episode/6",
//       "https://rickandmortyapi.com/api/episode/7",
//       "https://rickandmortyapi.com/api/episode/8",
//       "https://rickandmortyapi.com/api/episode/9",
//       "https://rickandmortyapi.com/api/episode/10",
//       "https://rickandmortyapi.com/api/episode/11",
//       "https://rickandmortyapi.com/api/episode/12",
//       "https://rickandmortyapi.com/api/episode/13",
//       "https://rickandmortyapi.com/api/episode/14",
//       "https://rickandmortyapi.com/api/episode/15",
//       "https://rickandmortyapi.com/api/episode/16",
//       "https://rickandmortyapi.com/api/episode/17",
//       "https://rickandmortyapi.com/api/episode/18",
//       "https://rickandmortyapi.com/api/episode/19",
//       "https://rickandmortyapi.com/api/episode/20",
//       "https://rickandmortyapi.com/api/episode/21",
//       "https://rickandmortyapi.com/api/episode/22",
//       "https://rickandmortyapi.com/api/episode/23",
//       "https://rickandmortyapi.com/api/episode/24",
//       "https://rickandmortyapi.com/api/episode/25",
//       "https://rickandmortyapi.com/api/episode/26",
//       "https://rickandmortyapi.com/api/episode/27",
//       "https://rickandmortyapi.com/api/episode/28",
//       "https://rickandmortyapi.com/api/episode/29",
//       "https://rickandmortyapi.com/api/episode/30",
//       "https://rickandmortyapi.com/api/episode/31",
//       "https://rickandmortyapi.com/api/episode/32",
//       "https://rickandmortyapi.com/api/episode/33",
//       "https://rickandmortyapi.com/api/episode/34",
//       "https://rickandmortyapi.com/api/episode/35",
//       "https://rickandmortyapi.com/api/episode/36",
//       "https://rickandmortyapi.com/api/episode/37",
//       "https://rickandmortyapi.com/api/episode/38",
//       "https://rickandmortyapi.com/api/episode/39",
//       "https://rickandmortyapi.com/api/episode/40",
//       "https://rickandmortyapi.com/api/episode/41",
//       "https://rickandmortyapi.com/api/episode/42",
//       "https://rickandmortyapi.com/api/episode/43",
//       "https://rickandmortyapi.com/api/episode/44",
//       "https://rickandmortyapi.com/api/episode/45",
//       "https://rickandmortyapi.com/api/episode/46",
//       "https://rickandmortyapi.com/api/episode/47",
//       "https://rickandmortyapi.com/api/episode/48",
//       "https://rickandmortyapi.com/api/episode/49",
//       "https://rickandmortyapi.com/api/episode/50",
//       "https://rickandmortyapi.com/api/episode/51",
//     ],
//     url: "https://rickandmortyapi.com/api/character/2",
//     created: "2017-11-04T18:50:21.651Z",
//   },
// ];

function App() {
  const [conteudo, setConteudo] = useState(<>...carregando...</>);
  async function PegarConteudo() { //função assÍncrona = para aguardar "await" a "response" do conteúdo da API
    // Vai realizar o fetch para a api do Rick and Morty - usando AXIOS
    // GET = pegar info, POST = adiicionar info, PUT = alterar info, DELETE = deletar info
    const requestOptions = {
      method: 'GET'
    }
    const response = await fetch(
      'https://rickandmortyapi.com/api/character',
      requestOptions
    ); // chama método fetch
    if(!response.ok){
      return [];
    }

    const data = await response.json();

    return data.results;  
  }
  // Transforma conteudos do mock em elementos html
  async function TransformaEmLista() {
    const todosPersonagens = await PegarConteudo();
    return todosPersonagens.map(personagem=> //Puxa os personagens, tipo for each
      // key serve para dar um identificador para cada item html, para não dar erro no react
      <div className ='card char' key={personagem.id}> 
        <img src={personagem.image} alt={`Foto de ${personagem.name}`} />
        <h2>{personagem.name}</h2>
        <div className = 'char-info'>
          <span><b>Espécie: </b>{personagem.species}</span>
          <span><b>Gênero: </b>{personagem.gender}</span>
        </div>
        <div>
          <div className ='lista-secundaria'>
            <b>Participações:</b>
            {/* Desafio: Traga as participações personagem.episode.map() */}
            { personagem.episode.map(
              ep => 
                  <span key={personagem.name+(ep.split('episode/'))[1]}>
                    Ep-{ (ep.split('episode/'))[1] }
                  </span>
            ) }
          </div>
          <h5><b>Status: </b>{personagem.status}</h5>
        </div>
      </div>
    );
  }
  // função "listener" que ao carregar vai transformar em lista
  useEffect(() => {
    async function carregar() {
      setConteudo(await TransformaEmLista());
    }
    carregar();
  }, []);

  return (
    <>
      <Header />
      <main>
        {/*Filtros */}
        <div className="lista-principal">{conteudo}</div>
      </main>
      <Footer />
    </>
  );
}

export default App;
