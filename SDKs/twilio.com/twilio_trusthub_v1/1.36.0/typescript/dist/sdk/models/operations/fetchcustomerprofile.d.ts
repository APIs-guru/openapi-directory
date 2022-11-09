import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCUSTOMERPROFILE_SERVERS: string[];
export declare class FetchCustomerProfilePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchCustomerProfileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCustomerProfileRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCustomerProfilePathParams;
    security: FetchCustomerProfileSecurity;
}
export declare class FetchCustomerProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1CustomerProfile?: shared.TrusthubV1CustomerProfile;
}
