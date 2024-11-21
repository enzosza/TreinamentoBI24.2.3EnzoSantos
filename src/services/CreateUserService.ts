import Users from "../models/users";
import usersRepository from "../repositories/usersRepository";

interface IRequest{
    id: String;
    name: String;
    email: String;
    cpf: String;
}

class CreateUserService{
    private usersRepository: usersRepository;

    constructor(usersRepository: usersRepository){
        this.usersRepository = usersRepository;
    }

    public execute(data: IRequest){
        const userwithCPF = this.usersRepository.findUserByCPF(data.cpf);
        if(userwithCPF) {throw Error('Já existe um usuário com esse CPF');}

        const userwithemail = this.usersRepository.findUserByEmail(data.email);
        if(userwithemail) {throw Error('Já existe um usuário com esse email');}

        const user = this.usersRepository.create(data);

        return user;
    }
}

export default CreateUserService;