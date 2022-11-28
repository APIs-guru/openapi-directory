import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDatasetAsyncPathParams extends SpeakeasyBase {
    datasetId: string;
}
export declare class UpdateDatasetAsyncRequestBody extends SpeakeasyBase {
    data?: string;
    type?: string;
}
export declare class UpdateDatasetAsyncSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class UpdateDatasetAsyncRequest extends SpeakeasyBase {
    pathParams: UpdateDatasetAsyncPathParams;
    request?: UpdateDatasetAsyncRequestBody;
    security: UpdateDatasetAsyncSecurity;
}
export declare class UpdateDatasetAsyncResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
