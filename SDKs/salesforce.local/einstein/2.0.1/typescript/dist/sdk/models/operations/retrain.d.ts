import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrainRequestBody extends SpeakeasyBase {
    algorithm?: string;
    epochs?: number;
    learningRate?: number;
    modelId?: string;
    trainParams?: shared.V2LanguageTrainParams;
}
export declare class RetrainSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class RetrainRequest extends SpeakeasyBase {
    request?: RetrainRequestBody;
    security: RetrainSecurity;
}
export declare class RetrainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trainResponse?: shared.TrainResponse;
}
