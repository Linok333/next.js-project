import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading";

const PageNotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000);
	}, [])
	return (
		<>
			<Head> 
				<title> Error </title>
			</Head>
			<Heading text="Page Not Found" />
		</>
	)
}
	

export default PageNotFound;