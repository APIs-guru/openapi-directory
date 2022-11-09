import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateDatasetAsync2PathParams extends SpeakeasyBase {
    datasetId: string;
}
export declare class UpdateDatasetAsync2RequestBody extends SpeakeasyBase {
    data?: string;
    path?: string;
}
export declare class UpdateDatasetAsync2Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class UpdateDatasetAsync2Request extends SpeakeasyBase {
    pathParams: UpdateDatasetAsync2PathParams;
    request?: UpdateDatasetAsync2RequestBody;
    security: UpdateDatasetAsync2Security;
}
export declare class UpdateDatasetAsync2Response extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
