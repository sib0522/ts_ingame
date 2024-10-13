class User {
    private _id: string;
    private _level: number;
    private _exp: number;
    private _money: number;
    private _credits: number;

    constructor(id: string, level: number, exp: number, money: number, credits: number) {
        this._id = id;
        this._level = level;
        this._exp = exp;
        this._money = money;
        this._credits = credits;
    }

    public useCredits(use: number): void {
        if (use > this._credits) {
            throw new Error("iinsuffictient credits");
        }
        this._credits -= use;
    }

    public addCredits(add: number): void {
        this._credits += add;
    }
}
