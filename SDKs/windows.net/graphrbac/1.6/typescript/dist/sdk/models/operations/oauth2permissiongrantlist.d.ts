import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OAuth2PermissionGrantListPathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class OAuth2PermissionGrantListQueryParams extends SpeakeasyBase {
    dollarFilter?: string;
    apiVersion: string;
}
export declare class OAuth2PermissionGrantListRequest extends SpeakeasyBase {
    pathParams: OAuth2PermissionGrantListPathParams;
    queryParams: OAuth2PermissionGrantListQueryParams;
}
export declare class OAuth2PermissionGrantListResponse extends SpeakeasyBase {
    contentType: string;
    oAuth2PermissionGrantListResult?: shared.OAuth2PermissionGrantListResult;
    statusCode: number;
}
