import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeAdvSecurityToken extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeXRapidApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    advSecurityToken?: SchemeAdvSecurityToken;
    xRapidApiKey?: SchemeXRapidApiKey;
}
