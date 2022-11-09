import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHUSECASE_SERVERS: string[];
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
