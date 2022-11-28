import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrainStatusAndProgressPathParams extends SpeakeasyBase {
    modelId: string;
}
export declare class GetTrainStatusAndProgressSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetTrainStatusAndProgressRequest extends SpeakeasyBase {
    pathParams: GetTrainStatusAndProgressPathParams;
    security: GetTrainStatusAndProgressSecurity;
}
export declare class GetTrainStatusAndProgressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trainResponse?: shared.TrainResponse;
}
