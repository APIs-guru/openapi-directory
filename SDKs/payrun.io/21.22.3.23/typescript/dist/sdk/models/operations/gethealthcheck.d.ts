import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHealthCheckResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    healthCheck?: shared.HealthCheck;
    statusCode: number;
}
