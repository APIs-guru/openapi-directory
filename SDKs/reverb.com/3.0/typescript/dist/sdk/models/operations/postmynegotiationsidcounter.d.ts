import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyNegotiationsIdCounterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostMyNegotiationsIdCounterRequestBodyOfferItems extends SpeakeasyBase {
    listingId: string;
    price: string;
    shippingPrice: string;
}
export declare enum PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Aud = "AUD",
    Jpy = "JPY",
    Nzd = "NZD",
    Mxn = "MXN"
}
export declare class PostMyNegotiationsIdCounterRequestBodyPrice extends SpeakeasyBase {
    amount: string;
    currency: PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum;
}
export declare enum PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Aud = "AUD",
    Jpy = "JPY",
    Nzd = "NZD",
    Mxn = "MXN"
}
/**
 * Shipping price (sellers only)
**/
export declare class PostMyNegotiationsIdCounterRequestBodyShippingPrice extends SpeakeasyBase {
    amount: string;
    currency: PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum;
}
export declare class PostMyNegotiationsIdCounterRequestBody extends SpeakeasyBase {
    countryCode?: string;
    layawayTermsSlug?: string;
    message?: string;
    offerItems?: PostMyNegotiationsIdCounterRequestBodyOfferItems[];
    price?: PostMyNegotiationsIdCounterRequestBodyPrice;
    quantity?: string;
    recipientId?: string;
    regionCode?: string;
    shippingPrice?: PostMyNegotiationsIdCounterRequestBodyShippingPrice;
}
export declare class PostMyNegotiationsIdCounterSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyNegotiationsIdCounterRequest extends SpeakeasyBase {
    pathParams: PostMyNegotiationsIdCounterPathParams;
    request?: PostMyNegotiationsIdCounterRequestBody;
    security: PostMyNegotiationsIdCounterSecurity;
}
export declare class PostMyNegotiationsIdCounterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
