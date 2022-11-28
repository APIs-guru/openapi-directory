import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateContinuousCheckPathParams extends SpeakeasyBase {
    continuousCheckId: number;
}
export declare class UpdateContinuousCheckSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UpdateContinuousCheckRequest extends SpeakeasyBase {
    pathParams: UpdateContinuousCheckPathParams;
    request: shared.UpdateContinuousCheckInput;
    security: UpdateContinuousCheckSecurity;
}
export declare class UpdateContinuousCheckResponse extends SpeakeasyBase {
    contentType: string;
    continuousCheck?: shared.ContinuousCheck;
    statusCode: number;
}
