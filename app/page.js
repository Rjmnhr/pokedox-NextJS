import Layout from "@/components/Layout";

import Link from "next/link";

export default async function Home() {
  const pokemon = await getData();

  return (
    <Layout>
      <h1 className="text-4xl mb-8 text-center">PokeDox</h1>
      <ul>
        {pokemon.map((item, index) => {
          return (
            <>
              <li key={index}>
                <Link href={`/pokemon/${index + 1}`} legacyBehavior>
                  <a className="border p-4 border-none  my-2 hover:bg-red-300 capitalize flex items-center text-lg bg-black rounded-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 mr-3"
                    />
                    <span className="mr-2 font-bold">{index + 1}</span>
                    {item.name}
                  </a>
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </Layout>
  );
}

export const getData = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  const { results } = await res.json();

  const pokemon = results.map((poke, index) => {
    const paddedId = ("00" + (index + 1)).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;

    return { ...poke, image };
  });

  return pokemon;
};
