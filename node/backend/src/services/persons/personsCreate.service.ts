import AppDataSource from "../../data-source";
import { Person } from "../../entities/person.entity";
import { createReadStream } from "fs";
import csvParser from "csv-parser";
import { AppError } from "../../errors/App.error";

const personCreateService = async (csv: string) => {
  try {
    const personRepository = AppDataSource.getRepository(Person);

    createReadStream(csv)
      .pipe(csvParser())
      .on("data", async (data) => {
        try {
          const person = new Person();
          person.nome = data.nome;
          person.idade = data.idade;
          person.cpf = data.cpf;
          person.rg = data.rg;
          person.data_nasc = data.data_nasc;
          person.sexo = data.sexo;
          person.signo = data.signo;
          person.mae = data.mae;
          person.pai = data.pai;
          person.email = data.email;
          person.senha = data.senha;
          person.cep = data.cep;
          person.endereco = data.endereco;
          person.numero = data.numero;
          person.bairro = data.bairro;
          person.cidade = data.cidade;
          person.estado = data.estado;
          person.telefone_fixo = data.telefone_fixo;
          person.celular = data.celular;
          person.altura = data.altura;
          person.peso = data.peso;
          person.tipo_sanguineo = data.tipo_sanguineo;
          person.cor = data.cor;

          await personRepository.save(person);
          return "Person salvo com sucesso!";
        } catch (error) {
          throw new AppError("Erro ao salvar Person", 400);
        }
      })
      .on("end", () => {
        return "Arquivo .csv processado com sucesso!";
      });
  } catch (error) {
    throw new AppError("Erro ao processar o arquivo .csv", 400);
  }
};
export default personCreateService;
