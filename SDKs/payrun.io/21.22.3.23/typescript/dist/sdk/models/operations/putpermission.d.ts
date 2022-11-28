import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPermissionPathParams extends SpeakeasyBase {
    permissionId: string;
}
export declare class PutPermissionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutPermissionRequest extends SpeakeasyBase {
    pathParams: PutPermissionPathParams;
    headers: PutPermissionHeaders;
}
export declare class PutPermissionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    permission?: shared.Permission;
    statusCode: number;
}
