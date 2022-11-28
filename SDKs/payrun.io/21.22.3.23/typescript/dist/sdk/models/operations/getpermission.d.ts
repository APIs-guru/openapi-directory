import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPermissionPathParams extends SpeakeasyBase {
    permissionId: string;
}
export declare class GetPermissionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPermissionRequest extends SpeakeasyBase {
    pathParams: GetPermissionPathParams;
    headers: GetPermissionHeaders;
}
export declare class GetPermissionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    permission?: shared.Permission;
    statusCode: number;
}
