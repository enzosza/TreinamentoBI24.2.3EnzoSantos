import PublicUsers from "../models/publicusers";
import Users from "../models/users";

interface ICreateUserDTO{
    id: String;
    name: String;
    email: String;
    password: String;
    phonenumber: String;
    cpf: String;
    birthdate: String;
}

interface IUpdateUserDTO{
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

class usersRepository{
    private users: Users[];
    private publicusers: PublicUsers[];

    constructor(){
        this.users = [];
        this.publicusers = [];
    }

    public findUserByCPF(cpf: String): Users | undefined {
        return this.users.find((user: Users) => user.cpf == cpf);
    }

    public findUserByEmail(email: String): Users | undefined {
        return this.users.find((user: Users) => user.email == email);
    }

    public findUserByPhoneNumber(phonenumber: String): Users | undefined {
        return this.users.find((user: Users) => user.phonenumber == phonenumber);
    }

    public create(data: ICreateUserDTO): Users{
        const user = new Users(data);
        const publicuser = new PublicUsers(data);

        this.users.push(user);
        this.publicusers.push(publicuser);

        return user;

    }

    public getAll(): PublicUsers[] {
        return this.publicusers;
    }

    public getByID(id: String): PublicUsers | undefined {
        return this.publicusers.find((publicusers: PublicUsers) => publicusers.id == id);
    }

    public update(data: IUpdateUserDTO): Users {
        const index = this.users.findIndex((user: Users) => user.id == data.id);

        return (this.users[index] = { ...this.users[index], ...data.data, updated_at: new Date})
    }

    public findIndexById(id: String): number {
        const index = this.users.findIndex((user: Users) => user.id == id);
        
        return index;
    }

    public delete(index: number){
        this.users.splice(index, 1);
    }
}

export default usersRepository;