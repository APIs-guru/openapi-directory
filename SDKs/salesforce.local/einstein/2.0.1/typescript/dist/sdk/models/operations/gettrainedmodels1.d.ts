import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrainedModels1PathParams extends SpeakeasyBase {
    datasetId: string;
}
export declare class GetTrainedModels1QueryParams extends SpeakeasyBase {
    count?: string;
    offset?: string;
}
export declare class GetTrainedModels1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetTrainedModels1Request extends SpeakeasyBase {
    pathParams: GetTrainedModels1PathParams;
    queryParams: GetTrainedModels1QueryParams;
    security: GetTrainedModels1Security;
}
export declare class GetTrainedModels1Response extends SpeakeasyBase {
    contentType: string;
    modelList?: shared.ModelList;
    statusCode: number;
}
