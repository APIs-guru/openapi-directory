package operations

import (
	"openapi/pkg/models/shared"
)

type GamesParentGamesListPathParams struct {
	GamePk string `pathParam:"style=simple,explode=false,name=game_pk"`
}

type GamesParentGamesListQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GamesParentGamesListRequest struct {
	PathParams  GamesParentGamesListPathParams
	QueryParams GamesParentGamesListQueryParams
}

type GamesParentGamesList200ApplicationJSON struct {
	Count    int64         `json:"count"`
	Next     *string       `json:"next,omitempty"`
	Previous *string       `json:"previous,omitempty"`
	Results  []shared.Game `json:"results"`
}

type GamesParentGamesListResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GamesParentGamesList200ApplicationJSONObject *GamesParentGamesList200ApplicationJSON
}
