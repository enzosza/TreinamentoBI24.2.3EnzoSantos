import Users from "../models/users";
import usersRepository from "../repositories/usersRepository";

interface IRequest{
    id: string;
}

class GetUserService{
    private usersRepository: usersRepository;

    constructor(usersRepository: usersRepository){
        this.usersRepository = usersRepository;
    }

    public execute(data: IRequest){
        const user = this.usersRepository.getByID(data.id);


        if(!user){ throw Error('Esse usuário não existe');}

        return user;
    }
}

export default GetUserService;