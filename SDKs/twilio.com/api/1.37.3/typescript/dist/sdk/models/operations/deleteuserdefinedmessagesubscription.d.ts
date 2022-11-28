import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteUserDefinedMessageSubscriptionServerList: readonly ["https://api.twilio.com"];
export declare class DeleteUserDefinedMessageSubscriptionPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
    sid: string;
}
export declare class DeleteUserDefinedMessageSubscriptionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUserDefinedMessageSubscriptionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUserDefinedMessageSubscriptionPathParams;
    security: DeleteUserDefinedMessageSubscriptionSecurity;
}
export declare class DeleteUserDefinedMessageSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
