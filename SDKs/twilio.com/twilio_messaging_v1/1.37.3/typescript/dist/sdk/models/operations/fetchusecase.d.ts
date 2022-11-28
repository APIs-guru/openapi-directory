import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUsecaseServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchUsecaseSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUsecaseRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: FetchUsecaseSecurity;
}
export declare class FetchUsecaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1Usecase?: shared.MessagingV1Usecase;
}
