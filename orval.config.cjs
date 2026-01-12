module.exports = {
  bnbApi: {
    input: "../bnb-be/swagger-spec.json", // Percorso relativo al file generato da NestJS
    output: {
      mode: "tags-split",
      target: "./src/api/generated", // Cartella di destinazione
      client: "react-query", // Genera hook useQuery e useMutation
      override: {
        mutator: {
          path: "./src/api/orval-instance.ts",
          name: "customInstance",
        },
        // Oppure una logica custom per rimuovere "AuthController"
      },
    },
  },
};
