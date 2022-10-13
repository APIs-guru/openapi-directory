package operations

import (
	"openapi/pkg/models/shared"
)

type GamesStoresListPathParams struct {
	GamePk string `pathParam:"style=simple,explode=false,name=game_pk"`
}

type GamesStoresListQueryParams struct {
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type GamesStoresListRequest struct {
	PathParams  GamesStoresListPathParams
	QueryParams GamesStoresListQueryParams
}

type GamesStoresList200ApplicationJSON struct {
	Count    int64                  `json:"count"`
	Next     *string                `json:"next"`
	Previous *string                `json:"previous"`
	Results  []shared.GameStoreFull `json:"results"`
}

type GamesStoresListResponse struct {
	ContentType                             string
	StatusCode                              int64
	GamesStoresList200ApplicationJSONObject *GamesStoresList200ApplicationJSON
}
