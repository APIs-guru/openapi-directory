import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHENDUSER_SERVERS: string[];
export declare class FetchEndUserPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchEndUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchEndUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchEndUserPathParams;
    security: FetchEndUserSecurity;
}
export declare class FetchEndUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceEndUser?: shared.NumbersV2RegulatoryComplianceEndUser;
}
