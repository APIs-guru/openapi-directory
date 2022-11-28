import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserApiGetMessagePathParams extends SpeakeasyBase {
    messageId: number;
}
export declare class UserApiGetMessageRequest extends SpeakeasyBase {
    pathParams: UserApiGetMessagePathParams;
}
export declare class UserApiGetMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userMessageContract?: shared.UserMessageContract;
}
