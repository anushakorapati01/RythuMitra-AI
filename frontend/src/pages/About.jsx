import useTranslation from "../hooks/useTranslation";

function About() {

  const text = useTranslation();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>

      <h1>{text.about.title}</h1>

      <p>{text.about.description}</p>

    </div>
  );
}

export default About;