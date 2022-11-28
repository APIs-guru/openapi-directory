import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatasetPkRelatedObjectsPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetDatasetPkRelatedObjectsSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatasetPkRelatedObjects401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetPkRelatedObjects404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetPkRelatedObjects500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetPkRelatedObjectsRequest extends SpeakeasyBase {
    pathParams: GetDatasetPkRelatedObjectsPathParams;
    security: GetDatasetPkRelatedObjectsSecurity;
}
export declare class GetDatasetPkRelatedObjectsResponse extends SpeakeasyBase {
    contentType: string;
    datasetRelatedObjectsResponse?: shared.DatasetRelatedObjectsResponse;
    getDatasetPkRelatedObjects401ApplicationJsonObject?: GetDatasetPkRelatedObjects401ApplicationJson;
    getDatasetPkRelatedObjects404ApplicationJsonObject?: GetDatasetPkRelatedObjects404ApplicationJson;
    getDatasetPkRelatedObjects500ApplicationJsonObject?: GetDatasetPkRelatedObjects500ApplicationJson;
    statusCode: number;
}
