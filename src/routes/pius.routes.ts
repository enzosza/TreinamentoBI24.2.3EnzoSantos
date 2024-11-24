import { Router, Request, Response} from 'express';
import piusRepository from '../repositories/piusRepository';
import CreatePiuService from '../services/CreatePiuService';
import { userRepository } from './users.routes';

const piusRouter = Router();
export const piuRepository = new piusRepository();

piusRouter.post('/', (request: Request, response: Response) => {
    try {
        const { user_id, text, likes, comments } = request.body;

        if(!text){
            return response.status(400).json({error: 'Não é possível publicar um Piu sem texto.'});
        }
        if(text.length > 140){
            return response.status(400).json({error: "O Piu não pode ter mais de 140 caracteres"})
        }

        const createPiu = new CreatePiuService(piuRepository, userRepository);

        const piu = createPiu.execute({
            user_id,
            text,
            likes,
            comments
        });

        return response.status(200).json(piu);
    } catch(e: any) {
        return response.status(400).json({ error: e.message});
    }

});

piusRouter.get('/getAll', (request: Request, response: Response) =>{
    const pius = piuRepository.getAll();

    return response.status(200).json(pius);
});

export default piusRouter;