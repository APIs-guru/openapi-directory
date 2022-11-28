import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesSendPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class MessagesSendSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class MessagesSendRequest extends SpeakeasyBase {
    pathParams: MessagesSendPathParams;
    request?: shared.SendMessagesRequest;
    security: MessagesSendSecurity;
}
export declare class MessagesSendResponse extends SpeakeasyBase {
    contentType: string;
    sendMessagesResponse?: shared.SendMessagesResponse;
    statusCode: number;
}
