import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeClientId extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemePlaidVersion extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeSecret extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    clientId: SchemeClientId;
    plaidVersion: SchemePlaidVersion;
    secret: SchemeSecret;
}
