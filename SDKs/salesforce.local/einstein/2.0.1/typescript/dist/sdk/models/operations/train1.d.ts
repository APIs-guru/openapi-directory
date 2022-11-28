import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Train1RequestBody extends SpeakeasyBase {
    algorithm?: string;
    datasetId?: number;
    epochs?: number;
    learningRate?: number;
    name?: string;
    trainParams?: shared.V2VisionTrainParams;
}
export declare class Train1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class Train1Request extends SpeakeasyBase {
    request?: Train1RequestBody;
    security: Train1Security;
}
export declare class Train1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trainResponse?: shared.TrainResponse;
}
