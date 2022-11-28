import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrainStatusAndProgress1PathParams extends SpeakeasyBase {
    modelId: string;
}
export declare class GetTrainStatusAndProgress1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetTrainStatusAndProgress1Request extends SpeakeasyBase {
    pathParams: GetTrainStatusAndProgress1PathParams;
    security: GetTrainStatusAndProgress1Security;
}
export declare class GetTrainStatusAndProgress1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trainResponse?: shared.TrainResponse;
}
