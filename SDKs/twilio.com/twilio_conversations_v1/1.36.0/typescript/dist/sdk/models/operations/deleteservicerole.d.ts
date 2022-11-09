import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESERVICEROLE_SERVERS: string[];
export declare class DeleteServiceRolePathParams extends SpeakeasyBase {
    chatServiceSid: string;
    sid: string;
}
export declare class DeleteServiceRoleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteServiceRoleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteServiceRolePathParams;
    security: DeleteServiceRoleSecurity;
}
export declare class DeleteServiceRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
