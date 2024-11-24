import PublicUsers from "../models/publicusers";
import Users from "../models/users";

interface ICreateUserDTO{
    id: string;
    name: string;
    email: string;
    password: string;
    phonenumber: string;
    cpf: string;
    birthdate: string;
}

interface IUpdateUserDTO{
    id: string;
    data: {
        name: string;
        email: string;
        password: string;
        phonenumber: string;
        cpf: string;
        birthdate: string;
    }
}

class usersRepository{
    private users: Users[];
    private publicusers: PublicUsers[];

    constructor(){
        this.users = [];
        this.publicusers = [];
    }

    public findUserByCPF(cpf: string): Users | undefined {
        return this.users.find((user: Users) => user.cpf == cpf);
    }

    public findUserByEmail(email: string): Users | undefined {
        return this.users.find((user: Users) => user.email == email);
    }

    public findUserByPhoneNumber(phonenumber: string): Users | undefined {
        return this.users.find((user: Users) => user.phonenumber == phonenumber);
    }

    public create(data: ICreateUserDTO): Users{
        const user = new Users(data);
        const publicuser = new PublicUsers(data);

        this.users.push(user);
        this.publicusers.push(publicuser);

        return user;

    }

    public getAll(): Omit <Users, 'password'>[] {
        const usersWithoutPassword = this.users.map((user) => {
            const userWithoutPassword = {
                id: user.id,
                name: user.name,
                email: user.email,
                phonenumber: user.phonenumber,
                cpf: user.cpf,
                birthdate: user.birthdate,
                created_at: user.created_at,
                updated_at: user.updated_at
            }
            return userWithoutPassword;
        })
        return usersWithoutPassword;
    }

    public getByID(id: string): Omit <Users, 'password'> | undefined {
        const user = this.users.find((users: PublicUsers) => users.id == id);
        if(user){
            const userWithoutPassword = {
                id: user.id,
                name: user.name,
                email: user.email,
                phonenumber: user.phonenumber,
                cpf: user.cpf,
                birthdate: user.birthdate,
                created_at: user.created_at,
                updated_at: user.updated_at
            }
            return userWithoutPassword;
        }
        return undefined;
    }

    public update(data: IUpdateUserDTO): Users {
        const index = this.users.findIndex((user: Users) => user.id == data.id);

        return (this.users[index] = { ...this.users[index], ...data.data, updated_at: new Date})
    }

    public findIndexById(id: string): number {
        const index = this.users.findIndex((user: Users) => user.id == id);
        
        return index;
    }

    public delete(index: number){
        this.users.splice(index, 1);
        this.publicusers.splice(index, 1);
    }

    public userExists(user_id: string) {
        const exists = this.users.find((users: Users) => users.id == user_id);
        return exists;
    }
}

export default usersRepository;