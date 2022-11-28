import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeOAuth2 extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    oAuth2: SchemeOAuth2;
}
export declare class SchemeBasicAuth extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class SchemeOAuthVeloBackOffice extends SpeakeasyBase {
    authorization: string;
}
