import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSERVICE_SERVERS: string[];
export declare class FetchServicePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchServicePathParams;
    security: FetchServiceSecurity;
}
export declare class FetchServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1Service?: shared.MessagingV1Service;
}
