import { AxiosInstance } from "axios";
import { NearMisses } from "./nearmisses";
import { Recordings } from "./recordings";
import { Requests } from "./requests";
import { Scenarios } from "./scenarios";
import { StubMappings } from "./stubmappings";
import { System } from "./system";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://wiremock.org/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    nearMisses: NearMisses;
    recordings: Recordings;
    requests: Requests;
    scenarios: Scenarios;
    stubMappings: StubMappings;
    system: System;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
