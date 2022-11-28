import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Retrain1RequestBody extends SpeakeasyBase {
    algorithm?: string;
    epochs?: number;
    learningRate?: number;
    modelId?: string;
    trainParams?: shared.V2VisionTrainParams;
}
export declare class Retrain1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class Retrain1Request extends SpeakeasyBase {
    request?: Retrain1RequestBody;
    security: Retrain1Security;
}
export declare class Retrain1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trainResponse?: shared.TrainResponse;
}
