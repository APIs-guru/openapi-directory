import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeletePermissionPathParams extends SpeakeasyBase {
    permissionId: string;
}
export declare class DeletePermissionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePermissionRequest extends SpeakeasyBase {
    pathParams: DeletePermissionPathParams;
    headers: DeletePermissionHeaders;
}
export declare class DeletePermissionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
