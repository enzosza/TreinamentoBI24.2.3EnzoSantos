import piusRepository from "../repositories/piusRepository";

interface IRequest{
    piu_id: string;
}

class DeletePiuService{
    private piusRepository: piusRepository;

    constructor(piusRepository: piusRepository){
        this.piusRepository = piusRepository;
    }

    public execute(data: IRequest){
        const piuwithID = this.piusRepository.getByID(data.piu_id)

        if(!piuwithID){ throw Error('Esse Piu não existe');}

        const index = this.piusRepository.findIndexById(data.piu_id);

        this.piusRepository.delete(index);

        return piuwithID;
    }
}

export default DeletePiuService;