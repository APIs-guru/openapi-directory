import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConnectionInfoBody extends SpeakeasyBase {
    connectionServiceUri?: string;
    connectionSessionId?: string;
    connectionSessionPath?: string;
    hostPublicKeys?: string[];
    relayEndpoint?: string;
    relaySasToken?: string;
    sessionToken?: string;
}
