import React from "react";
import { useRouter } from "next/router";

export default function Id() {
    const router = useRouter();

    return <div>{"Hello~" + router.query.testPath}</div>;
}
