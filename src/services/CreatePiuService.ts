import piusRepository from "../repositories/piusRepository";
import usersRepository from "../repositories/usersRepository";

interface IRequest{
    user_id: string;
    text: string;
    likes: number;
    comments: number;
}

class CreatePiuService{
    private piusRepository: piusRepository;
    private usersRepository: usersRepository;


    constructor(piusRepository: piusRepository, usersRepository: usersRepository){
        this.piusRepository = piusRepository;
        this.usersRepository = usersRepository;
    }

    public execute(data: IRequest){
        const exists = this.usersRepository.userExists(data.user_id);
        if(!exists){ throw Error('Esse usuário não existe');}


        const piu = this.piusRepository.create(data);

        return piu;
    }
}

export default CreatePiuService;