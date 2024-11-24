class Pius {
    piu_id: string;

    user_id: string;

    text: string;

    likes: number;

    comments: number;

    created_at: Date;

    updated_at?: Date;


    constructor({
        piu_id,
        user_id,
        text,
        likes,
        comments
    }: Omit <Pius, 'created_at' | 'updated_at'>){
        this.piu_id = piu_id;
        this.user_id = user_id;
        this.text = text;
        this.likes = likes;
        this.comments = comments;
        this.created_at = new Date;
        this.updated_at = new Date;
    }
}

export default Pius;