import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeOauth2Implicit extends SpeakeasyBase {
    authorization: string;
}
export declare class SchemeOauth2Code extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    oauth2Implicit?: SchemeOauth2Implicit;
    oauth2Code?: SchemeOauth2Code;
}
export declare class SchemeApiKey extends SpeakeasyBase {
    apiKey: string;
}
