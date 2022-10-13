package operations

type GetListingsAllQueryParams struct {
	AcceptsGiftCards    *bool    `queryParam:"style=form,explode=true,name=accepts_gift_cards"`
	AcceptsPaymentPlans *bool    `queryParam:"style=form,explode=true,name=accepts_payment_plans"`
	AuctionPriceMax     *float32 `queryParam:"style=form,explode=true,name=auction_price_max"`
	Category            *string  `queryParam:"style=form,explode=true,name=category"`
	Conditions          []string `queryParam:"style=form,explode=false,name=conditions"`
	Currency            *string  `queryParam:"style=form,explode=true,name=currency"`
	Decade              *string  `queryParam:"style=form,explode=true,name=decade"`
	ExcludeAuctions     *bool    `queryParam:"style=form,explode=true,name=exclude_auctions"`
	Finish              *string  `queryParam:"style=form,explode=true,name=finish"`
	Handmade            *bool    `queryParam:"style=form,explode=true,name=handmade"`
	ItemCity            *string  `queryParam:"style=form,explode=true,name=item_city"`
	ItemCountry         *string  `queryParam:"style=form,explode=true,name=item_country"`
	ItemRegion          *string  `queryParam:"style=form,explode=true,name=item_region"`
	ItemState           *string  `queryParam:"style=form,explode=true,name=item_state"`
	ListingType         *string  `queryParam:"style=form,explode=true,name=listing_type"`
	LocalPickup         *bool    `queryParam:"style=form,explode=true,name=local_pickup"`
	Make                []string `queryParam:"style=form,explode=false,name=make"`
	Model               *string  `queryParam:"style=form,explode=true,name=model"`
	MustNot             *string  `queryParam:"style=form,explode=true,name=must_not"`
	NotIds              []string `queryParam:"style=form,explode=false,name=not_ids"`
	Offset              *int64   `queryParam:"style=form,explode=true,name=offset"`
	Page                *int64   `queryParam:"style=form,explode=true,name=page"`
	PerPage             *int64   `queryParam:"style=form,explode=true,name=per_page"`
	PreferredSeller     *bool    `queryParam:"style=form,explode=true,name=preferred_seller"`
	PriceMax            *float32 `queryParam:"style=form,explode=true,name=price_max"`
	PriceMin            *float32 `queryParam:"style=form,explode=true,name=price_min"`
	ProductType         *string  `queryParam:"style=form,explode=true,name=product_type"`
	Query               *string  `queryParam:"style=form,explode=true,name=query"`
	ShipsTo             *string  `queryParam:"style=form,explode=true,name=ships_to"`
	Shop                *string  `queryParam:"style=form,explode=true,name=shop"`
	ShopID              *string  `queryParam:"style=form,explode=true,name=shop_id"`
	WatchersCountMin    *int64   `queryParam:"style=form,explode=true,name=watchers_count_min"`
	YearMax             *int64   `queryParam:"style=form,explode=true,name=year_max"`
	YearMin             *int64   `queryParam:"style=form,explode=true,name=year_min"`
}

type GetListingsAllRequest struct {
	QueryParams GetListingsAllQueryParams
}

type GetListingsAllResponse struct {
	ContentType string
	StatusCode  int64
}
