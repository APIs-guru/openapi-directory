import { SpeakeasyBase } from "../../../internal/utils";
export declare class HealthCheckHealthCheck extends SpeakeasyBase {
    info?: string;
    version?: string;
}
export declare class HealthCheck extends SpeakeasyBase {
    healthCheck?: HealthCheckHealthCheck;
}
