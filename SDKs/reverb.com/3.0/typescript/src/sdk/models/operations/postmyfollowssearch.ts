import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostMyFollowsSearchRequestBodyCurrencyEnum {
    Usd = "USD"
,    Cad = "CAD"
,    Eur = "EUR"
,    Gbp = "GBP"
,    Aud = "AUD"
,    Jpy = "JPY"
,    Nzd = "NZD"
,    Mxn = "MXN"
,    Dkk = "DKK"
,    Sek = "SEK"
,    Chf = "CHF"
,    Ars = "ARS"
,    Brl = "BRL"
,    Hkd = "HKD"
,    Nok = "NOK"
,    Php = "PHP"
,    Pln = "PLN"
,    Rub = "RUB"
}

export enum PostMyFollowsSearchRequestBodyListingTypeEnum {
    Auctions = "auctions"
,    Offers = "offers"
}


export class PostMyFollowsSearchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accepts_gift_cards" })
  acceptsGiftCards?: boolean;

  @Metadata({ data: "json, name=accepts_payment_plans" })
  acceptsPaymentPlans?: boolean;

  @Metadata({ data: "json, name=auction_price_max" })
  auctionPriceMax?: number;

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=conditions" })
  conditions?: string[];

  @Metadata({ data: "json, name=currency" })
  currency?: PostMyFollowsSearchRequestBodyCurrencyEnum;

  @Metadata({ data: "json, name=decade" })
  decade?: string;

  @Metadata({ data: "json, name=exclude_auctions" })
  excludeAuctions?: boolean;

  @Metadata({ data: "json, name=finish" })
  finish?: string;

  @Metadata({ data: "json, name=handmade" })
  handmade?: boolean;

  @Metadata({ data: "json, name=item_city" })
  itemCity?: string;

  @Metadata({ data: "json, name=item_country" })
  itemCountry?: string;

  @Metadata({ data: "json, name=item_region" })
  itemRegion?: string;

  @Metadata({ data: "json, name=item_state" })
  itemState?: string;

  @Metadata({ data: "json, name=listing_type" })
  listingType?: PostMyFollowsSearchRequestBodyListingTypeEnum;

  @Metadata({ data: "json, name=local_pickup" })
  localPickup?: boolean;

  @Metadata({ data: "json, name=make" })
  make?: string[];

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=must_not" })
  mustNot?: string;

  @Metadata({ data: "json, name=not_ids" })
  notIds?: number[];

  @Metadata({ data: "json, name=preferred_seller" })
  preferredSeller?: boolean;

  @Metadata({ data: "json, name=price_max" })
  priceMax?: number;

  @Metadata({ data: "json, name=price_min" })
  priceMin?: number;

  @Metadata({ data: "json, name=product_type" })
  productType?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=ships_to" })
  shipsTo?: string;

  @Metadata({ data: "json, name=shop" })
  shop?: string;

  @Metadata({ data: "json, name=shop_id" })
  shopId?: string;

  @Metadata({ data: "json, name=watchers_count_min" })
  watchersCountMin?: number;

  @Metadata({ data: "json, name=year_max" })
  yearMax?: number;

  @Metadata({ data: "json, name=year_min" })
  yearMin?: number;
}


export class PostMyFollowsSearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyFollowsSearchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostMyFollowsSearchRequestBody;

  @Metadata()
  security: PostMyFollowsSearchSecurity;
}


export class PostMyFollowsSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
