import { FC, ReactNode } from "react";
import Footer from "./Footer"
import Header from "./Header"
import dynamic from 'next/dynamic'


type layoutProps = {
	children: ReactNode,
}

// fix snowfall error;
const DynamicComponentWithNoSSR = dynamic(
  () => import("react-snowfall"),
  { ssr: false }
)

const Layout: FC<layoutProps> = ({children }) => {
		return (
			<>
			<DynamicComponentWithNoSSR/>
				<Header />
				{children}
				<Footer />
			</>
		)
};

export default Layout;