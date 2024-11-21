import Users from "../models/users";

interface ICreateUserDTO{
    id: String;
    name: String;
    email: String;
    cpf: String;
}

interface IUpdateUserDTO{
    id: String;
    data: {
    name: String;
    email: String;
    }
}

class usersRepository{
    private users: Users[];

    constructor(){
        this.users = [];
    }

    public findUserByCPF(cpf: String): Users | undefined {
        return this.users.find((user: Users) => user.cpf == cpf);
    }

    public findUserByEmail(email: String): Users | undefined {
        return this.users.find((user: Users) => user.email == email);
    }

    public create(data: ICreateUserDTO): Users{
        const user = new Users(data);

        this.users.push(user);

        return user;

    }

    public getAll(): Users[] {
        return this.users;
    }

    public getByID(id: String): Users | undefined {
        return this.users.find((users: Users) => users.id == id);
    }

    public update(data: IUpdateUserDTO): Users {
        const index = this.users.findIndex((user: Users) => user.id == data.id);

        return (this.users[index] = { ...this.users[index], ...data.data, updated_at: new Date})
    }
}

export default usersRepository;