import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Persona } from "./persona";
import { Playlist } from "./playlist";
import { Show } from "./show";
import { Spin } from "./spin";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://spinitron.com/api"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    persona: Persona;
    playlist: Playlist;
    show: Show;
    spin: Spin;
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
