import { SpeakeasyBase } from "../../../internal/utils";
export declare class OAuth2PermissionGrantCreatePathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class OAuth2PermissionGrantCreateQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class OAuth2PermissionGrantCreateRequest extends SpeakeasyBase {
    pathParams: OAuth2PermissionGrantCreatePathParams;
    queryParams: OAuth2PermissionGrantCreateQueryParams;
    request?: any;
}
export declare class OAuth2PermissionGrantCreateResponse extends SpeakeasyBase {
    contentType: string;
    oAuth2PermissionGrant?: any;
    statusCode: number;
}
