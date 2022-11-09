import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHandpickedSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetHandpickedSlugQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=accepts_gift_cards" })
  acceptsGiftCards?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=accepts_payment_plans" })
  acceptsPaymentPlans?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=auction_price_max" })
  auctionPriceMax?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=conditions" })
  conditions?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=decade" })
  decade?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_auctions" })
  excludeAuctions?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=finish" })
  finish?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=handmade" })
  handmade?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=item_city" })
  itemCity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=item_country" })
  itemCountry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=item_region" })
  itemRegion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=item_state" })
  itemState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=listing_type" })
  listingType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=local_pickup" })
  localPickup?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=make" })
  make?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=must_not" })
  mustNot?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=not_ids" })
  notIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=preferred_seller" })
  preferredSeller?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=price_max" })
  priceMax?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=price_min" })
  priceMin?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=product_type" })
  productType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ships_to" })
  shipsTo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=shop" })
  shop?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=shop_id" })
  shopId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=watchers_count_min" })
  watchersCountMin?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year_max" })
  yearMax?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year_min" })
  yearMin?: number;
}


export class GetHandpickedSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetHandpickedSlugPathParams;

  @Metadata()
  queryParams: GetHandpickedSlugQueryParams;
}


export class GetHandpickedSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
