import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeAdvSecurityToken extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeXRapidApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class SecurityOption1 extends SpeakeasyBase {
    advSecurityToken: SchemeAdvSecurityToken;
}
export declare class SecurityOption2 extends SpeakeasyBase {
    xRapidApiKey: SchemeXRapidApiKey;
}
export declare class Security extends SpeakeasyBase {
    option1?: SecurityOption1;
    option2?: SecurityOption2;
}
