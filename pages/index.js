import Layout from "../components/Layout";
import ProgrammingEditor from "../components/ProgrammingEditor";
import WebD from "../components/WebD";
import { useEditor } from "../context/AppContext";

const CYS = () => {
  const { language } = useEditor();

  return (
    <Layout
      title="CYS | IDE"
      content="Enter code in either language and get the output for the entered code"
    >
      <div className="h-full">
        {language === "webd" ? <WebD /> : <ProgrammingEditor />}
      </div>
    </Layout>
  );
};

export default CYS;
