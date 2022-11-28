import { SpeakeasyBase } from "../../../internal/utils";
export declare class HealthCheckHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class HealthCheck200ApplicationJson extends SpeakeasyBase {
    allGood?: boolean;
    capiOk?: boolean;
    dbOk?: boolean;
    memcachedOk?: boolean;
    message?: string;
}
export declare class HealthCheckRequest extends SpeakeasyBase {
    headers: HealthCheckHeaders;
}
export declare class HealthCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    healthCheck200ApplicationJsonObject?: HealthCheck200ApplicationJson;
}
