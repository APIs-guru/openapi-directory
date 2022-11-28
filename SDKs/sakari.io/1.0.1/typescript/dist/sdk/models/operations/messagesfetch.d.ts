import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesFetchPathParams extends SpeakeasyBase {
    accountId: string;
    messageId: string;
}
export declare class MessagesFetchSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class MessagesFetchRequest extends SpeakeasyBase {
    pathParams: MessagesFetchPathParams;
    security: MessagesFetchSecurity;
}
export declare class MessagesFetchResponse extends SpeakeasyBase {
    contentType: string;
    messageResponse?: shared.MessageResponse;
    statusCode: number;
}
