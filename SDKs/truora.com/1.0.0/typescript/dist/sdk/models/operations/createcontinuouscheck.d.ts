import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateContinuousCheckSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CreateContinuousCheckRequest extends SpeakeasyBase {
    request: shared.CreateContinuousCheckInput;
    security: CreateContinuousCheckSecurity;
}
export declare class CreateContinuousCheckResponse extends SpeakeasyBase {
    contentType: string;
    continuousCheck?: shared.ContinuousCheck;
    error?: any;
    statusCode: number;
}
