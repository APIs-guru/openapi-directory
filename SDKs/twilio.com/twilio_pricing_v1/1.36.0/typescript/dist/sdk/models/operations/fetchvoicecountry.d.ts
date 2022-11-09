import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHVOICECOUNTRY_SERVERS: string[];
export declare class FetchVoiceCountryPathParams extends SpeakeasyBase {
    isoCountry: string;
}
export declare class FetchVoiceCountrySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchVoiceCountryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchVoiceCountryPathParams;
    security: FetchVoiceCountrySecurity;
}
export declare class FetchVoiceCountryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pricingV1VoiceVoiceCountryInstance?: shared.PricingV1VoiceVoiceCountryInstance;
}
