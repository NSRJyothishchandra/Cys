import { getLanguage } from "../../utils/getLanguage";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        const [language, versionIndex] = getLanguage(req.body.language);

        const inputParams = {
          ...req.body,
          language,
          versionIndex,
          clientId:"df028803f0141f1e74b87a3c2ca7210a",
          clientSecret: "e51a90aa96323038fed06487d59fa622685535335091ff3dee19b17f8d8c8c6",
        };

        const resp = await fetch("https://api.jdoodle.com/v1/execute", {
          method: "post",
          body: JSON.stringify(inputParams),
          headers: { "Content-type": "application/json" },
        });

        const data = await resp.json();

        res.status(200).json(data);
      } catch (err) {
        console.log(err.message);
        res.status(400).json({ error: err.message });
      }
      break;

    default:
      res.status(405).json({ error: `${req.method} is not allowed` });
      break;
  }
};
