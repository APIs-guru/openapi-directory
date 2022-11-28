import { AxiosInstance } from "axios";
import { Books } from "./books";
import { Sentences } from "./sentences";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://randomlovecraft.com/api"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    books: Books;
    sentences: Sentences;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
