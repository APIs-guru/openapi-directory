import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEUSERBINDING_SERVERS: string[];
export declare class DeleteUserBindingPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
    userSid: string;
}
export declare class DeleteUserBindingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUserBindingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUserBindingPathParams;
    security: DeleteUserBindingSecurity;
}
export declare class DeleteUserBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
