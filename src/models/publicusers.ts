import Users from "./users";

// type PublicUsers = Omit <Users, 'password'>;

class PublicUsers{
    id: string;

    name: string;

    email: string;

    phonenumber: string;

    birthdate: string;

    cpf: string;

    created_at: Date;

    updated_at?: Date;

    constructor({
        id,
        name,
        email,
        phonenumber,
        birthdate,
        cpf,
    }: Omit <Users, 'created_at' | 'updated_at'>){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phonenumber = phonenumber;
        this.birthdate = birthdate;
        this.cpf = cpf;
        this.created_at = new Date;
        this.updated_at = new Date;
    }

}

export default PublicUsers;