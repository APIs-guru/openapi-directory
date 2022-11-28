import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeBasicAuth extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class SchemeOAuth2 extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    basicAuth?: SchemeBasicAuth;
    oAuth2?: SchemeOAuth2;
}
export declare class SchemeOpenIdConnect extends SpeakeasyBase {
    authorization: string;
}
