import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Account } from "./account";
import { Word } from "./word";
import { WordList } from "./wordlist";
import { WordLists } from "./wordlists";
import { Words } from "./words";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.wordnik.com/v4"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    account: Account;
    word: Word;
    wordList: WordList;
    wordLists: WordLists;
    words: Words;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
