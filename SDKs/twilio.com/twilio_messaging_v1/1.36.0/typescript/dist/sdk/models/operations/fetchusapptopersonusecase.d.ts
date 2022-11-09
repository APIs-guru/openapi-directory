import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHUSAPPTOPERSONUSECASE_SERVERS: string[];
export declare class FetchUsAppToPersonUsecasePathParams extends SpeakeasyBase {
    messagingServiceSid: string;
}
export declare class FetchUsAppToPersonUsecaseQueryParams extends SpeakeasyBase {
    brandRegistrationSid?: string;
}
export declare class FetchUsAppToPersonUsecaseSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUsAppToPersonUsecaseRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUsAppToPersonUsecasePathParams;
    queryParams: FetchUsAppToPersonUsecaseQueryParams;
    security: FetchUsAppToPersonUsecaseSecurity;
}
export declare class FetchUsAppToPersonUsecaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1ServiceUsAppToPersonUsecase?: shared.MessagingV1ServiceUsAppToPersonUsecase;
}
