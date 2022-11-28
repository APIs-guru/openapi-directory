import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchVoiceNumberServerList: readonly ["https://pricing.twilio.com"];
export declare class FetchVoiceNumberPathParams extends SpeakeasyBase {
    number: string;
}
export declare class FetchVoiceNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchVoiceNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchVoiceNumberPathParams;
    security: FetchVoiceNumberSecurity;
}
export declare class FetchVoiceNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pricingV1VoiceVoiceNumber?: shared.PricingV1VoiceVoiceNumber;
}
