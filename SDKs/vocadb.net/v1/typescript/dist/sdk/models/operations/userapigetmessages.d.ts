import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserApiGetMessagesPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum UserApiGetMessagesInboxEnum {
    Nothing = "Nothing",
    Received = "Received",
    Sent = "Sent",
    Notifications = "Notifications"
}
export declare class UserApiGetMessagesQueryParams extends SpeakeasyBase {
    anotherUserId?: number;
    getTotalCount?: boolean;
    inbox?: UserApiGetMessagesInboxEnum;
    maxResults?: number;
    start?: number;
    unread?: boolean;
}
export declare class UserApiGetMessagesRequest extends SpeakeasyBase {
    pathParams: UserApiGetMessagesPathParams;
    queryParams: UserApiGetMessagesQueryParams;
}
export declare class UserApiGetMessagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultUserMessageContract?: shared.PartialFindResultUserMessageContract;
    statusCode: number;
}
