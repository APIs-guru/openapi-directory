import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OAuth2PermissionGrantDeletePathParams extends SpeakeasyBase {
    objectId: string;
    tenantId: string;
}
export declare class OAuth2PermissionGrantDeleteQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class OAuth2PermissionGrantDeleteRequest extends SpeakeasyBase {
    pathParams: OAuth2PermissionGrantDeletePathParams;
    queryParams: OAuth2PermissionGrantDeleteQueryParams;
}
export declare class OAuth2PermissionGrantDeleteResponse extends SpeakeasyBase {
    contentType: string;
    graphError?: shared.GraphError;
    statusCode: number;
}
