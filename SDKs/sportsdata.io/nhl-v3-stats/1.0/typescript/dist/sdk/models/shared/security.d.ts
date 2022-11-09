import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeApiKeyHeader extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeApiKeyQuery extends SpeakeasyBase {
    apiKey: string;
}
export declare class SecurityOption1 extends SpeakeasyBase {
    apiKeyHeader: SchemeApiKeyHeader;
}
export declare class SecurityOption2 extends SpeakeasyBase {
    apiKeyQuery: SchemeApiKeyQuery;
}
export declare class Security extends SpeakeasyBase {
    option1?: SecurityOption1;
    option2?: SecurityOption2;
}
