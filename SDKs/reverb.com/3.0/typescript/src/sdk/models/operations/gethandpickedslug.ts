import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHandpickedSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetHandpickedSlugQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accepts_gift_cards" })
  acceptsGiftCards?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accepts_payment_plans" })
  acceptsPaymentPlans?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auction_price_max" })
  auctionPriceMax?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=conditions" })
  conditions?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=decade" })
  decade?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_auctions" })
  excludeAuctions?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=finish" })
  finish?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=handmade" })
  handmade?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_city" })
  itemCity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_country" })
  itemCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_region" })
  itemRegion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_state" })
  itemState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=listing_type" })
  listingType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=local_pickup" })
  localPickup?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=make" })
  make?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=must_not" })
  mustNot?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=not_ids" })
  notIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preferred_seller" })
  preferredSeller?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price_max" })
  priceMax?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price_min" })
  priceMin?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_type" })
  productType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ships_to" })
  shipsTo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shop" })
  shop?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shop_id" })
  shopId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=watchers_count_min" })
  watchersCountMin?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year_max" })
  yearMax?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year_min" })
  yearMin?: number;
}


export class GetHandpickedSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHandpickedSlugPathParams;

  @SpeakeasyMetadata()
  queryParams: GetHandpickedSlugQueryParams;
}


export class GetHandpickedSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
