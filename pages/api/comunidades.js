import { SiteClient } from "datocms-client";

export default async function recebedorDeRequest(request, response) {
  if (request.method === "POST") {
    const TOKEN = "0d9148e657578303be5066a4f98d54";
    const client = new SiteClient(TOKEN);

    console.log("req", request);

    const registroCriado = await client.items.create({
      itemType: "971928", // model ID
      ...request.body,
      //   title: "Podcast React",
      //   imageUrl:
      //     "https://i.scdn.co/image/ab6765630000ba8abe87396b7b70555d0e0b7b64",
      //   createSlug: "alura",
    });

    console.log("regi", registroCriado);

    response.json({
      dados: "Alguma Coisa",
      registroCriado: registroCriado,
    });
    return;
  }
  response.status(404).json({
    massage: "Ainda não temos nada no GET, mas no POST sim!",
  });
}
