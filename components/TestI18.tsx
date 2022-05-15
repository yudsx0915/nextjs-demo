import React from "react";
import { useTranslation } from "next-i18next";

export default function TestI18(props: any) {
    const { t } = useTranslation("common");
    return <div>{t("greetMsg")}</div>;
}
