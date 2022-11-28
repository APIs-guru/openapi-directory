import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchPermissionPathParams extends SpeakeasyBase {
    permissionId: string;
}
export declare class PatchPermissionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PatchPermissionRequest extends SpeakeasyBase {
    pathParams: PatchPermissionPathParams;
    headers: PatchPermissionHeaders;
}
export declare class PatchPermissionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    permission?: shared.Permission;
    statusCode: number;
}
