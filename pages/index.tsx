import { useEffect } from "react";

import Head from "next/head";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { updateCatBreeds } from "../redux/breedsSlice";

// Cat API
import { getCatBreeds } from "../api/thecat-api";

export default function Home({ catBreeds }) {
  catBreeds = JSON.parse(catBreeds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCatBreeds(catBreeds));
  }, []);

  return (
    <div>
      <Head>
        <title>CatWiki - Homepage</title>
      </Head>
    </div>
  );
}

export const getServerSideProps = async () => {
  const catBreedsApiResponse = await getCatBreeds();

  return {
    props: {
      catBreeds: JSON.stringify(catBreedsApiResponse.data),
    },
  };
};
