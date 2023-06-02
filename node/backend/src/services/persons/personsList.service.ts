import { Person } from "../../entities/person.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/App.error";

const listPersonService = async () => {
  try {
    const personRepository = AppDataSource.getRepository(Person);

    const persons = await personRepository.find();

    return persons;
  } catch (error) {
    throw new AppError("Erro ao buscar pessoas", 400);
  }
};

export default listPersonService;
