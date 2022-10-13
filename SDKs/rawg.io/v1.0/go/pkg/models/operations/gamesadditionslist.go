package operations

import (
	"openapi/pkg/models/shared"
)

type GamesAdditionsListPathParams struct {
	GamePk string `pathParam:"style=simple,explode=false,name=game_pk"`
}

type GamesAdditionsListQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GamesAdditionsListRequest struct {
	PathParams  GamesAdditionsListPathParams
	QueryParams GamesAdditionsListQueryParams
}

type GamesAdditionsList200ApplicationJSON struct {
	Count    int64         `json:"count"`
	Next     *string       `json:"next"`
	Previous *string       `json:"previous"`
	Results  []shared.Game `json:"results"`
}

type GamesAdditionsListResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GamesAdditionsList200ApplicationJSONObject *GamesAdditionsList200ApplicationJSON
}
