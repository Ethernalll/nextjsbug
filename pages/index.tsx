import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

export default function Home({ works }: { works: string }) {
	const router = useRouter();
	return (
		<>
			<div>Are bugs fun? {works}</div>
		</>
	);
}

export const config = {
	runtime: "experimental-edge",
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	return {
		props: {
			works: "nope",
		},
	};
}
