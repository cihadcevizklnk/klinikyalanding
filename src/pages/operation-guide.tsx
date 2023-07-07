import React from "react";
import { useTranslation } from "react-i18next";

const OperationGuide = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        marginTop: "5vh",
        marginBottom: "15vh",
        marginLeft: "10vw",
        marginRight: "10vw",
      }}
    >
      <h1 style={{ marginBottom: 50 }}>{t("ProcessingGuide")}</h1>
      <h3 style={{ marginTop: 50 }}>{t("PGTitle1")}</h3>
      <p style={{ whiteSpace: "break-spaces" }}>{t("PGDesciption1")}</p>

      <h3 style={{ marginTop: 50 }}>{t("PGTitle2")}</h3>
      <p style={{ whiteSpace: "break-spaces" }}>{t("PGDesciption2")}</p>

      <h3 style={{ marginTop: 50 }}>{t("PGTitle3")}</h3>
      <p style={{ whiteSpace: "break-spaces" }}>{t("PGDesciption3")}</p>

      <h3 style={{ marginTop: 50 }}>{t("PGTitle4")}</h3>
      <p style={{ whiteSpace: "break-spaces" }}>{t("PGDesciption4")}</p>

      <h3 style={{ marginTop: 50 }}>{t("PGTitle5")}</h3>
      <p style={{ whiteSpace: "break-spaces" }}>{t("PGDesciption5")}</p>

      <h3 style={{ marginTop: 50 }}>{t("PGTitle6")}</h3>
      <p style={{ whiteSpace: "break-spaces" }}>{t("PGDesciption6")}</p>

      <h3 style={{ marginTop: 50 }}>{t("PGTitle7")}</h3>
      <p style={{ whiteSpace: "break-spaces" }}>{t("PGDesciption7")}</p>

      <h3 style={{ marginTop: 50 }}>{t("PGTitle8")}</h3>
      <p style={{ whiteSpace: "break-spaces" }}>{t("PGDesciption8")}</p>

      <h3 style={{ marginTop: 50 }}>{t("PGTitle9")}</h3>
      <p style={{ whiteSpace: "break-spaces" }}>{t("PGDesciption9")}</p>

      <h3 style={{ marginTop: 50 }}>{t("PGTitle10")}</h3>
      <p style={{ whiteSpace: "break-spaces" }}>{t("PGDesciption10")}</p>

      <h3 style={{ marginTop: 50 }}>{t("PGTitle11")}</h3>
      <p style={{ whiteSpace: "break-spaces" }}>{t("PGDesciption11")}</p>
    </div>
  );
};

export default OperationGuide;
