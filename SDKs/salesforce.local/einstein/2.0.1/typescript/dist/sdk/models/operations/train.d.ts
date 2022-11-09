import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TrainRequestBody extends SpeakeasyBase {
    algorithm?: string;
    datasetId?: number;
    epochs?: number;
    learningRate?: number;
    name?: string;
    trainParams?: shared.V2LanguageTrainParams;
}
export declare class TrainSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class TrainRequest extends SpeakeasyBase {
    request?: TrainRequestBody;
    security: TrainSecurity;
}
export declare class TrainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trainResponse?: shared.TrainResponse;
}
