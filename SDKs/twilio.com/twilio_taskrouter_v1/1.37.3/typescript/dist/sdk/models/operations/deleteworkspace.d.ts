import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteWorkspaceServerList: readonly ["https://taskrouter.twilio.com"];
export declare class DeleteWorkspacePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteWorkspaceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteWorkspaceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteWorkspacePathParams;
    security: DeleteWorkspaceSecurity;
}
export declare class DeleteWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
