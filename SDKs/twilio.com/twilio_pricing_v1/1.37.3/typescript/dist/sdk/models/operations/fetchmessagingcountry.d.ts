import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchMessagingCountryServerList: readonly ["https://pricing.twilio.com"];
export declare class FetchMessagingCountryPathParams extends SpeakeasyBase {
    isoCountry: string;
}
export declare class FetchMessagingCountrySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchMessagingCountryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchMessagingCountryPathParams;
    security: FetchMessagingCountrySecurity;
}
export declare class FetchMessagingCountryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pricingV1MessagingMessagingCountryInstance?: shared.PricingV1MessagingMessagingCountryInstance;
}
