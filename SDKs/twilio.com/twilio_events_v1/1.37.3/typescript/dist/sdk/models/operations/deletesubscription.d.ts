import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSubscriptionServerList: readonly ["https://events.twilio.com"];
export declare class DeleteSubscriptionPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteSubscriptionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSubscriptionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSubscriptionPathParams;
    security: DeleteSubscriptionSecurity;
}
export declare class DeleteSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
