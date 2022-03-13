import Head from "next/head";
import { GetServerSideProps } from "next";
import Banner from "../../components/amazon/Banner";
import Header from "../../components/amazon/Header";
import ProductFeed from "../../components/amazon/ProductFeed";

interface MyProps {
    products: any;
}
export default function Home({ products }: MyProps) {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Amazon 2.0</title>
            </Head>

            <Header />
            <main className="max-w-screen-2xl mx-auto">
                {/* Banner */}
                <Banner />

                {/* ProductFeed */}
                <ProductFeed products={products} />
            </main>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const products = await fetch("https://fakestoreapi.com/products").then((res) => {
        return res.json();
    });
    return {
        props: {
            products,
        },
    };
};
