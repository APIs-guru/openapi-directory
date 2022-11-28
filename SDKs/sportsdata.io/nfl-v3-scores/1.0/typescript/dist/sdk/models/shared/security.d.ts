import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeApiKeyHeader extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeApiKeyQuery extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    apiKeyHeader?: SchemeApiKeyHeader;
    apiKeyQuery?: SchemeApiKeyQuery;
}
