import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESUBSCRIPTION_SERVERS: string[];
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
