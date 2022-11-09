import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostConversationsConversationIdOfferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class PostConversationsConversationIdOfferRequestBodyOfferItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=listing_id" })
  listingId: string;

  @Metadata({ data: "json, name=price" })
  price: string;

  @Metadata({ data: "json, name=shipping_price" })
  shippingPrice: string;
}

export enum PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum {
    Usd = "USD"
,    Cad = "CAD"
,    Eur = "EUR"
,    Gbp = "GBP"
,    Aud = "AUD"
,    Jpy = "JPY"
,    Nzd = "NZD"
,    Mxn = "MXN"
}


export class PostConversationsConversationIdOfferRequestBodyPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: string;

  @Metadata({ data: "json, name=currency" })
  currency: PostConversationsConversationIdOfferRequestBodyPriceCurrencyEnum;
}

export enum PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum {
    Usd = "USD"
,    Cad = "CAD"
,    Eur = "EUR"
,    Gbp = "GBP"
,    Aud = "AUD"
,    Jpy = "JPY"
,    Nzd = "NZD"
,    Mxn = "MXN"
}


// PostConversationsConversationIdOfferRequestBodyShippingPrice
/** 
 * Shipping price (sellers only)
**/
export class PostConversationsConversationIdOfferRequestBodyShippingPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: string;

  @Metadata({ data: "json, name=currency" })
  currency: PostConversationsConversationIdOfferRequestBodyShippingPriceCurrencyEnum;
}


export class PostConversationsConversationIdOfferRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=country_code" })
  countryCode?: string;

  @Metadata({ data: "json, name=layaway_terms_slug" })
  layawayTermsSlug?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=offer_items", elemType: operations.PostConversationsConversationIdOfferRequestBodyOfferItems })
  offerItems?: PostConversationsConversationIdOfferRequestBodyOfferItems[];

  @Metadata({ data: "json, name=price" })
  price?: PostConversationsConversationIdOfferRequestBodyPrice;

  @Metadata({ data: "json, name=quantity" })
  quantity?: string;

  @Metadata({ data: "json, name=recipient_id" })
  recipientId?: string;

  @Metadata({ data: "json, name=region_code" })
  regionCode?: string;

  @Metadata({ data: "json, name=shipping_price" })
  shippingPrice?: PostConversationsConversationIdOfferRequestBodyShippingPrice;
}


export class PostConversationsConversationIdOfferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostConversationsConversationIdOfferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostConversationsConversationIdOfferPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostConversationsConversationIdOfferRequestBody;

  @Metadata()
  security: PostConversationsConversationIdOfferSecurity;
}


export class PostConversationsConversationIdOfferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
