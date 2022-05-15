import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import TestI18 from "../components/TestI18";

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}

const Home: NextPage = () => {
    const [rowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
    ]);

    const [columnDefs] = useState([{ field: "make" }, { field: "model" }, { field: "price" }]);
    const className = "border-0 outline-none ring-0 bg-blue-300";
    const router = useRouter();
    const { t } = useTranslation();

    useEffect(() => {
        console.log({ router });
    }, [router]);

    return (
        <div
            style={{ height: 400, margin: "0 auto", marginTop: "20px" }}
            onKeyDown={(event) => {
                console.log(event.key);
            }}
        >
            <AgGridReact
                className="w-full max-w-xl mx-auto ag-theme-alpine"
                rowClass="bg-blue-300"
                rowStyle={{ borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }}
                // getRowClass={() => className}
                // getRowStyle={() => {
                //     return { backgroundColor: "blue" };
                // }}
                rowData={rowData}
                columnDefs={columnDefs}
            ></AgGridReact>
            <button className="border border-black mt-6">test</button>
            <h1 className="text-5xl">{t("greetMsg")}</h1>
            <TestI18 />
        </div>
    );
};

export default Home;
