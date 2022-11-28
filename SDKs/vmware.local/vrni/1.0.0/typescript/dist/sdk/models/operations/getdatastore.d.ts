import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatastorePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDatastoreQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetDatastoreSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetDatastoreRequest extends SpeakeasyBase {
    pathParams: GetDatastorePathParams;
    queryParams: GetDatastoreQueryParams;
    security: GetDatastoreSecurity;
}
export declare class GetDatastoreResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    datastore?: shared.Datastore;
    statusCode: number;
}
