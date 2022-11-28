import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeLegacyApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    apiKey?: SchemeApiKey;
    legacyApiKey?: SchemeLegacyApiKey;
}
