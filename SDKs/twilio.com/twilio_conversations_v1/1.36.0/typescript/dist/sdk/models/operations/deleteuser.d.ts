import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEUSER_SERVERS: string[];
export declare class DeleteUserPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteUserHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.UserEnumWebhookEnabledTypeEnum;
}
export declare class DeleteUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUserPathParams;
    headers: DeleteUserHeaders;
    security: DeleteUserSecurity;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
