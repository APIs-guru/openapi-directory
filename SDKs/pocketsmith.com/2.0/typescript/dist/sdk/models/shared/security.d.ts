import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeDeveloperKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    developerKey: SchemeDeveloperKey;
}
export declare class SchemeOauth2 extends SpeakeasyBase {
    authorization: string;
}
