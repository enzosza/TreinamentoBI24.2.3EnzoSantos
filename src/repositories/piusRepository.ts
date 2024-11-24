import Pius from "../models/pius";
import Users from "../models/users";


interface ICreatePiuDTO{
    piu_id: string;
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

    public getAll(): Pius[]{
        return this.pius;
    }

    public getByID(id: string): Pius | undefined {
        return this.pius.find((pius: Pius) => pius.piu_id == id);
    }

    public findIndexById(id: string): number {
        const index = this.pius.findIndex((piu: Pius) => piu.piu_id == id);
        return index;
    }

    public delete(index: number){
        this.pius.splice(index, 1);
    }

}

export default piusRepository;