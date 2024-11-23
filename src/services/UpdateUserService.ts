import Users from "../models/users";
import usersRepository from "../repositories/usersRepository";

interface IRequest{
    id: String;
    data: {
    name: String;
    email: String;
    password: String;
    phonenumber: String;
    cpf: String;
    birthdate: String;
    }
}

class UpdateUserService{
    private usersRepository: usersRepository;

    constructor(usersRepository: usersRepository){
        this.usersRepository = usersRepository;
    }

    public execute(data: IRequest){
        const userwithID = this.usersRepository.getByID(data.id)

        if(!userwithID){ throw Error('Esse usuário não existe');}

        const userwithemail = this.usersRepository.findUserByEmail(data.data.email);
        if(userwithemail) {throw Error('Já existe um usuário com esse email');}

        const userwithCPF = this.usersRepository.findUserByEmail(data.data.cpf);
        if(userwithCPF) {throw Error('Já existe um usuário com esse CPF');}

        const userwithphonenumber = this.usersRepository.findUserByEmail(data.data.phonenumber);
        if(userwithphonenumber) {throw Error('Já existe um usuário com esse número de telefone');}

        const user = this.usersRepository.update(data);

        return user;
    }
}

export default UpdateUserService;