import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMyNegotiationsIdCounterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostMyNegotiationsIdCounterRequestBodyOfferItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=listing_id" })
  listingId: string;

  @Metadata({ data: "json, name=price" })
  price: string;

  @Metadata({ data: "json, name=shipping_price" })
  shippingPrice: string;
}

export enum PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum {
    Usd = "USD"
,    Cad = "CAD"
,    Eur = "EUR"
,    Gbp = "GBP"
,    Aud = "AUD"
,    Jpy = "JPY"
,    Nzd = "NZD"
,    Mxn = "MXN"
}


export class PostMyNegotiationsIdCounterRequestBodyPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: string;

  @Metadata({ data: "json, name=currency" })
  currency: PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum;
}

export enum PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum {
    Usd = "USD"
,    Cad = "CAD"
,    Eur = "EUR"
,    Gbp = "GBP"
,    Aud = "AUD"
,    Jpy = "JPY"
,    Nzd = "NZD"
,    Mxn = "MXN"
}


// PostMyNegotiationsIdCounterRequestBodyShippingPrice
/** 
 * Shipping price (sellers only)
**/
export class PostMyNegotiationsIdCounterRequestBodyShippingPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: string;

  @Metadata({ data: "json, name=currency" })
  currency: PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum;
}


export class PostMyNegotiationsIdCounterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=country_code" })
  countryCode?: string;

  @Metadata({ data: "json, name=layaway_terms_slug" })
  layawayTermsSlug?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=offer_items", elemType: operations.PostMyNegotiationsIdCounterRequestBodyOfferItems })
  offerItems?: PostMyNegotiationsIdCounterRequestBodyOfferItems[];

  @Metadata({ data: "json, name=price" })
  price?: PostMyNegotiationsIdCounterRequestBodyPrice;

  @Metadata({ data: "json, name=quantity" })
  quantity?: string;

  @Metadata({ data: "json, name=recipient_id" })
  recipientId?: string;

  @Metadata({ data: "json, name=region_code" })
  regionCode?: string;

  @Metadata({ data: "json, name=shipping_price" })
  shippingPrice?: PostMyNegotiationsIdCounterRequestBodyShippingPrice;
}


export class PostMyNegotiationsIdCounterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyNegotiationsIdCounterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMyNegotiationsIdCounterPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostMyNegotiationsIdCounterRequestBody;

  @Metadata()
  security: PostMyNegotiationsIdCounterSecurity;
}


export class PostMyNegotiationsIdCounterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
