import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHFACTOR_SERVERS: string[];
export declare class FetchFactorPathParams extends SpeakeasyBase {
    identity: string;
    serviceSid: string;
    sid: string;
}
export declare class FetchFactorSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchFactorRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchFactorPathParams;
    security: FetchFactorSecurity;
}
export declare class FetchFactorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceEntityFactor?: shared.VerifyV2ServiceEntityFactor;
}
