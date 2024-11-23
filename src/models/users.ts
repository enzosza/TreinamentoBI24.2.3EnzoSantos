class Users {
    id: String;

    name: String;

    email: String;

    password: String;

    phonenumber: String;

    birthdate: String;

    cpf: String;

    created_at: Date;

    updated_at?: Date;


    constructor({
        id,
        name,
        email,
        password,
        phonenumber,
        birthdate,
        cpf,
    }: Omit <Users, 'created_at' | 'updated_at'>){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phonenumber = phonenumber;
        this.birthdate = birthdate;
        this.cpf = cpf;
        this.created_at = new Date;
        this.updated_at = new Date;
    }
}

export default Users;