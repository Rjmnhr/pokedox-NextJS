import Layout from "@/components/Layout";
import Link from "next/link";
const Pokemon = async ({ params }) => {
  const pokemon = await getPokemon(params.id);
  return (
    <Layout title={pokemon.name}>
      <h1 className="text-4xl mb-2 text-center capitalize">
        {pokemon.id}. {pokemon.name}
      </h1>
      <div className="flex flex-col items-center bg-black rounded-md p-8">
        <img className="mx-auto" src={pokemon.image} alt={pokemon.name} />
        <p>
          <span className="font-bold mr-2 ">Weight:</span> {pokemon.weight}
        </p>
        <p>
          <span className="font-bold mr-2">Height:</span>
          {pokemon.height}
        </p>
        <h2 className="text-2xl mt-6 mb-2">Types</h2>
        {pokemon.types.map((type, index) => (
          <p key={index}>{type.type.name}</p>
        ))}
      </div>
      <p className="mt-10 text-center">
        <Link href="/ " legacyBehavior>
          <a>
            <button className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">
              Home
            </button>
          </a>
        </Link>
      </p>
    </Layout>
  );
};
export const getPokemon = async (pokeId) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
  const pokemon = await res.json();
  const paddedId = ("00" + pokeId).slice(-3);
  pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;

  return pokemon;
};
export default Pokemon;
