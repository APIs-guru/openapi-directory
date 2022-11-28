import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserApiDeleteMessagesPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UserApiDeleteMessagesQueryParams extends SpeakeasyBase {
    messageId: number[];
}
export declare class UserApiDeleteMessagesRequest extends SpeakeasyBase {
    pathParams: UserApiDeleteMessagesPathParams;
    queryParams: UserApiDeleteMessagesQueryParams;
}
export declare class UserApiDeleteMessagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
