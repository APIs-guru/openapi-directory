import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostConversationsConversationIdOfferPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class PostConversationsConversationIdOfferRequestBodyOfferItems extends SpeakeasyBase {
    listingId: string;
    price: string;
    shippingPrice: string;
}
export declare enum PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Aud = "AUD",
    Jpy = "JPY",
    Nzd = "NZD",
    Mxn = "MXN"
}
export declare class PostConversationsConversationIdOfferRequestBodyPrice extends SpeakeasyBase {
    amount: string;
    currency: PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum;
}
export declare enum PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum {
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
export declare class PostConversationsConversationIdOfferRequestBodyShippingPrice extends SpeakeasyBase {
    amount: string;
    currency: PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum;
}
export declare class PostConversationsConversationIdOfferRequestBody extends SpeakeasyBase {
    countryCode?: string;
    layawayTermsSlug?: string;
    message?: string;
    offerItems?: PostConversationsConversationIdOfferRequestBodyOfferItems[];
    price?: PostConversationsConversationIdOfferRequestBodyPrice;
    quantity?: string;
    recipientId?: string;
    regionCode?: string;
    shippingPrice?: PostConversationsConversationIdOfferRequestBodyShippingPrice;
}
export declare class PostConversationsConversationIdOfferSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostConversationsConversationIdOfferRequest extends SpeakeasyBase {
    pathParams: PostConversationsConversationIdOfferPathParams;
    request?: PostConversationsConversationIdOfferRequestBody;
    security: PostConversationsConversationIdOfferSecurity;
}
export declare class PostConversationsConversationIdOfferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
