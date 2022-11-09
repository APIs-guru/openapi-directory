import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTrainedModelsPathParams extends SpeakeasyBase {
    datasetId: string;
}
export declare class GetTrainedModelsQueryParams extends SpeakeasyBase {
    count?: string;
    offset?: string;
}
export declare class GetTrainedModelsSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetTrainedModelsRequest extends SpeakeasyBase {
    pathParams: GetTrainedModelsPathParams;
    queryParams: GetTrainedModelsQueryParams;
    security: GetTrainedModelsSecurity;
}
export declare class GetTrainedModelsResponse extends SpeakeasyBase {
    contentType: string;
    modelList?: shared.ModelList;
    statusCode: number;
}
