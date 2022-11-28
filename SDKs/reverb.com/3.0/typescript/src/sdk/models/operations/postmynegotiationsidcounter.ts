import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyNegotiationsIdCounterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostMyNegotiationsIdCounterRequestBodyOfferItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listing_id" })
  listingId: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_price" })
  shippingPrice: string;
}

export enum PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Aud = "AUD",
    Jpy = "JPY",
    Nzd = "NZD",
    Mxn = "MXN"
}


export class PostMyNegotiationsIdCounterRequestBodyPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: PostMyNegotiationsIdCounterRequestBodyPriceCurrencyEnum;
}

export enum PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Aud = "AUD",
    Jpy = "JPY",
    Nzd = "NZD",
    Mxn = "MXN"
}


// PostMyNegotiationsIdCounterRequestBodyShippingPrice
/** 
 * Shipping price (sellers only)
**/
export class PostMyNegotiationsIdCounterRequestBodyShippingPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: PostMyNegotiationsIdCounterRequestBodyShippingPriceCurrencyEnum;
}


export class PostMyNegotiationsIdCounterRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=layaway_terms_slug" })
  layawayTermsSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=offer_items", elemType: PostMyNegotiationsIdCounterRequestBodyOfferItems })
  offerItems?: PostMyNegotiationsIdCounterRequestBodyOfferItems[];

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: PostMyNegotiationsIdCounterRequestBodyPrice;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_id" })
  recipientId?: string;

  @SpeakeasyMetadata({ data: "json, name=region_code" })
  regionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_price" })
  shippingPrice?: PostMyNegotiationsIdCounterRequestBodyShippingPrice;
}


export class PostMyNegotiationsIdCounterSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyNegotiationsIdCounterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyNegotiationsIdCounterPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostMyNegotiationsIdCounterRequestBody;

  @SpeakeasyMetadata()
  security: PostMyNegotiationsIdCounterSecurity;
}


export class PostMyNegotiationsIdCounterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
