import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHVOICENUMBER_SERVERS: string[];
export declare class FetchVoiceNumberPathParams extends SpeakeasyBase {
    destinationNumber: string;
}
export declare class FetchVoiceNumberQueryParams extends SpeakeasyBase {
    originationNumber?: string;
}
export declare class FetchVoiceNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchVoiceNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchVoiceNumberPathParams;
    queryParams: FetchVoiceNumberQueryParams;
    security: FetchVoiceNumberSecurity;
}
export declare class FetchVoiceNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pricingV2VoiceVoiceNumber?: shared.PricingV2VoiceVoiceNumber;
}
