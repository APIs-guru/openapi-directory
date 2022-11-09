import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ApiV2010AccountTokenIceServers extends SpeakeasyBase {
    credential?: string;
    url?: string;
    urls?: string;
    username?: string;
}
export declare class ApiV2010AccountToken extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: string;
    dateUpdated?: string;
    iceServers?: ApiV2010AccountTokenIceServers[];
    password?: string;
    ttl?: string;
    username?: string;
}
