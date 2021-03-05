import { useEffect, useMemo } from "react";

import Head from "next/head";
import Image from "next/image";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { updateCatBreeds } from "../redux/breedsSlice";

// Cat API
import { getCatBreeds } from "../api/thecat-api";

// Components
import Layout from "../components/Layout";
import HeroImage from "../components/HeroImage";
import DropdownSearch from "../components/DropdownSearch";

export default function Home({ catBreeds }) {
  // catBreeds = useMemo(() => JSON.parse(catBreeds), [catBreeds]);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(updateCatBreeds(catBreeds));
  // }, []);

  return (
    <div>
      <Head>
        <title>CatWiki - Homepage</title>
      </Head>

      <Layout>
        <section className="mt-8 rounded-4xl overflow-hidden relative">
          <HeroImage />

          <div className="absolute top-6 left-6 md:top-16 md:left-16 lg:top-24 lg:left-24">
            <div
              style={{ filter: "grayscale(100%) brightness(10)" }}
              className="max-w-smaller md:max-w-small lg:max-w-xs"
            >
              <Image
                src="/CatwikiLogoWhite.svg"
                height="87"
                width="250"
                alt="catwiki logo"
              />
            </div>

            <p className="text-white  text-xs md:text-2xl">
              Get to know more about your <br /> cat breed
            </p>

            <DropdownSearch
              placeholder="Enter your breed"
              icon="/search.svg"
              style={{ width: "350px" }}
              name="Search"
            />
          </div>

          <div className="h-80 bg-brown-light w-full"></div>
        </section>
      </Layout>
    </div>
  );
}

export const getServerSideProps = async () => {
  // const catBreedsApiResponse = await getCatBreeds();

  return {
    props: {
      // catBreeds: JSON.stringify(catBreedsApiResponse.data),
    },
  };
};
