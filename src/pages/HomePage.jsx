import HomeHero from "../components/HomeHero";
import { Grid, GridItem } from "@chakra-ui/react";
import TrackSection from "../components/TrackSection";
import ArtistSection from "../components/ArtistSection";
import Header from "../components/Header";

const HomePage = () => {
	return (
		<Grid
			templateColumns={{ base: "1fr", lg: "repeat(8, 1fr)" }}
			minH="100vh"
			maxW={{ base: "100vw", lg: "100vw" }}
			pl={{ base: 2, md: 14, lg: 12, xl: 0 }}
			pb={24}
			pt={{ base: 10, md: 1 }}>
			<GridItem colSpan={8} pl={1}>
				<Header/>
				<HomeHero />
				<TrackSection title="New Releases" />
				<ArtistSection/>
				
			</GridItem>
		</Grid>
	);
};

export default HomePage;
