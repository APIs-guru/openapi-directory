import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContinuousCheckPathParams extends SpeakeasyBase {
    continuousCheckId: number;
}
export declare class GetContinuousCheckSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetContinuousCheckRequest extends SpeakeasyBase {
    pathParams: GetContinuousCheckPathParams;
    security: GetContinuousCheckSecurity;
}
export declare class GetContinuousCheckResponse extends SpeakeasyBase {
    contentType: string;
    continuousCheck?: shared.ContinuousCheck;
    statusCode: number;
}
