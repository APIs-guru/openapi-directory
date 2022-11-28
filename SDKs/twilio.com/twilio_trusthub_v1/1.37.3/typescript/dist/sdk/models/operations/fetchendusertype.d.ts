import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchEndUserTypeServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchEndUserTypePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchEndUserTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchEndUserTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchEndUserTypePathParams;
    security: FetchEndUserTypeSecurity;
}
export declare class FetchEndUserTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1EndUserType?: shared.TrusthubV1EndUserType;
}
