import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PostMyFollowsSearchRequestBodyCurrencyEnum {
    Usd = "USD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Aud = "AUD",
    Jpy = "JPY",
    Nzd = "NZD",
    Mxn = "MXN",
    Dkk = "DKK",
    Sek = "SEK",
    Chf = "CHF",
    Ars = "ARS",
    Brl = "BRL",
    Hkd = "HKD",
    Nok = "NOK",
    Php = "PHP",
    Pln = "PLN",
    Rub = "RUB"
}

export enum PostMyFollowsSearchRequestBodyListingTypeEnum {
    Auctions = "auctions",
    Offers = "offers"
}


export class PostMyFollowsSearchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accepts_gift_cards" })
  acceptsGiftCards?: boolean;

  @SpeakeasyMetadata({ data: "json, name=accepts_payment_plans" })
  acceptsPaymentPlans?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auction_price_max" })
  auctionPriceMax?: number;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=conditions" })
  conditions?: string[];

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: PostMyFollowsSearchRequestBodyCurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=decade" })
  decade?: string;

  @SpeakeasyMetadata({ data: "json, name=exclude_auctions" })
  excludeAuctions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=finish" })
  finish?: string;

  @SpeakeasyMetadata({ data: "json, name=handmade" })
  handmade?: boolean;

  @SpeakeasyMetadata({ data: "json, name=item_city" })
  itemCity?: string;

  @SpeakeasyMetadata({ data: "json, name=item_country" })
  itemCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=item_region" })
  itemRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=item_state" })
  itemState?: string;

  @SpeakeasyMetadata({ data: "json, name=listing_type" })
  listingType?: PostMyFollowsSearchRequestBodyListingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=local_pickup" })
  localPickup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=make" })
  make?: string[];

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=must_not" })
  mustNot?: string;

  @SpeakeasyMetadata({ data: "json, name=not_ids" })
  notIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=preferred_seller" })
  preferredSeller?: boolean;

  @SpeakeasyMetadata({ data: "json, name=price_max" })
  priceMax?: number;

  @SpeakeasyMetadata({ data: "json, name=price_min" })
  priceMin?: number;

  @SpeakeasyMetadata({ data: "json, name=product_type" })
  productType?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=ships_to" })
  shipsTo?: string;

  @SpeakeasyMetadata({ data: "json, name=shop" })
  shop?: string;

  @SpeakeasyMetadata({ data: "json, name=shop_id" })
  shopId?: string;

  @SpeakeasyMetadata({ data: "json, name=watchers_count_min" })
  watchersCountMin?: number;

  @SpeakeasyMetadata({ data: "json, name=year_max" })
  yearMax?: number;

  @SpeakeasyMetadata({ data: "json, name=year_min" })
  yearMin?: number;
}


export class PostMyFollowsSearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyFollowsSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostMyFollowsSearchRequestBody;

  @SpeakeasyMetadata()
  security: PostMyFollowsSearchSecurity;
}


export class PostMyFollowsSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
