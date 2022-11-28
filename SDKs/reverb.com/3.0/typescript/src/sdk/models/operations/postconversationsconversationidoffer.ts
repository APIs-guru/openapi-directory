import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostConversationsConversationIdOfferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class PostConversationsConversationIdOfferRequestBodyOfferItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listing_id" })
  listingId: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_price" })
  shippingPrice: string;
}

export enum PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Aud = "AUD",
    Jpy = "JPY",
    Nzd = "NZD",
    Mxn = "MXN"
}


export class PostConversationsConversationIdOfferRequestBodyPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum;
}

export enum PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Aud = "AUD",
    Jpy = "JPY",
    Nzd = "NZD",
    Mxn = "MXN"
}


// PostConversationsConversationIdOfferRequestBodyShippingPrice
/** 
 * Shipping price (sellers only)
**/
export class PostConversationsConversationIdOfferRequestBodyShippingPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum;
}


export class PostConversationsConversationIdOfferRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=layaway_terms_slug" })
  layawayTermsSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=offer_items", elemType: PostConversationsConversationIdOfferRequestBodyOfferItems })
  offerItems?: PostConversationsConversationIdOfferRequestBodyOfferItems[];

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: PostConversationsConversationIdOfferRequestBodyPrice;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_id" })
  recipientId?: string;

  @SpeakeasyMetadata({ data: "json, name=region_code" })
  regionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_price" })
  shippingPrice?: PostConversationsConversationIdOfferRequestBodyShippingPrice;
}


export class PostConversationsConversationIdOfferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostConversationsConversationIdOfferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostConversationsConversationIdOfferPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostConversationsConversationIdOfferRequestBody;

  @SpeakeasyMetadata()
  security: PostConversationsConversationIdOfferSecurity;
}


export class PostConversationsConversationIdOfferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
