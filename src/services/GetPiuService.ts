import piusRepository from "../repositories/piusRepository";

class GetPiuService{
    private piusRepository: piusRepository;

    constructor(piusRepository: piusRepository){
        this.piusRepository = piusRepository;
    }

    public execute(){

        return this.piusRepository.getAll();
    }
}

export default GetPiuService;