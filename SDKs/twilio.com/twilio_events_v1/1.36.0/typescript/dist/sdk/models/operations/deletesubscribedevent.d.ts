import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESUBSCRIBEDEVENT_SERVERS: string[];
export declare class DeleteSubscribedEventPathParams extends SpeakeasyBase {
    subscriptionSid: string;
    type: string;
}
export declare class DeleteSubscribedEventSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSubscribedEventRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSubscribedEventPathParams;
    security: DeleteSubscribedEventSecurity;
}
export declare class DeleteSubscribedEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
