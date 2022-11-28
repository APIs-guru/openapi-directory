import { AxiosInstance } from "axios";
import { Client } from "./client";
import { Domain } from "./domain";
import { Fleet } from "./fleet";
import { Team } from "./team";
import { Tenant } from "./tenant";
import { User } from "./user";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://phantauth.net"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    client: Client;
    domain: Domain;
    fleet: Fleet;
    team: Team;
    tenant: Tenant;
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
