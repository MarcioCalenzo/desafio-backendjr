import AppDataSource from "../../data-source";
import { AppError } from "../../errors/App.error";
import { Person } from "../../entities/person.entity";

const githubtokenList = async () => {
  try {
    const personRepository = AppDataSource.getRepository(Person);
    const persons = await personRepository.find();
    return persons;
  } catch (error) {
    throw new AppError("Erro ao trazer os dados", 400);
  }
};

export default githubtokenList;
