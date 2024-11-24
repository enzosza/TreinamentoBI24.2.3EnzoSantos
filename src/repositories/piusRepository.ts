import Pius from "../models/pius";
import Users from "../models/users";


interface ICreatePiuDTO{
    user_id: string;
    text: string;
    likes: number;
    comments: number;
}

class piusRepository{
    private pius: Pius[];

    constructor(){
        this.pius = [];
    }

    public create(data: ICreatePiuDTO): Pius{
        const piu = new Pius(data);

        this.pius.push(piu);

        return piu;
    }

}

export default piusRepository;