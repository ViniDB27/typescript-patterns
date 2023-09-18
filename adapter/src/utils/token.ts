export default class Token {
    private _token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.ozr_dvav-ME3hE_WdcuDjK070eL-Z3s4MKB3UoLoluA";

    get token(): string {
        return this._token;
    }

}