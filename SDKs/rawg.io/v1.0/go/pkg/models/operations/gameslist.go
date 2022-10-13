package operations

import (
	"openapi/pkg/models/shared"
)

type GamesListQueryParams struct {
	Creators          *string `queryParam:"style=form,explode=true,name=creators"`
	Dates             *string `queryParam:"style=form,explode=true,name=dates"`
	Developers        *string `queryParam:"style=form,explode=true,name=developers"`
	ExcludeAdditions  *bool   `queryParam:"style=form,explode=true,name=exclude_additions"`
	ExcludeCollection *int64  `queryParam:"style=form,explode=true,name=exclude_collection"`
	ExcludeGameSeries *bool   `queryParam:"style=form,explode=true,name=exclude_game_series"`
	ExcludeParents    *bool   `queryParam:"style=form,explode=true,name=exclude_parents"`
	ExcludeStores     *string `queryParam:"style=form,explode=true,name=exclude_stores"`
	Genres            *string `queryParam:"style=form,explode=true,name=genres"`
	Metacritic        *string `queryParam:"style=form,explode=true,name=metacritic"`
	Ordering          *string `queryParam:"style=form,explode=true,name=ordering"`
	Page              *int64  `queryParam:"style=form,explode=true,name=page"`
	PageSize          *int64  `queryParam:"style=form,explode=true,name=page_size"`
	ParentPlatforms   *string `queryParam:"style=form,explode=true,name=parent_platforms"`
	Platforms         *string `queryParam:"style=form,explode=true,name=platforms"`
	PlatformsCount    *int64  `queryParam:"style=form,explode=true,name=platforms_count"`
	Publishers        *string `queryParam:"style=form,explode=true,name=publishers"`
	Search            *string `queryParam:"style=form,explode=true,name=search"`
	SearchExact       *bool   `queryParam:"style=form,explode=true,name=search_exact"`
	SearchPrecise     *bool   `queryParam:"style=form,explode=true,name=search_precise"`
	Stores            *string `queryParam:"style=form,explode=true,name=stores"`
	Tags              *string `queryParam:"style=form,explode=true,name=tags"`
	Updated           *string `queryParam:"style=form,explode=true,name=updated"`
}

type GamesListRequest struct {
	QueryParams GamesListQueryParams
}

type GamesList200ApplicationJSON struct {
	Count    int64         `json:"count"`
	Next     *string       `json:"next"`
	Previous *string       `json:"previous"`
	Results  []shared.Game `json:"results"`
}

type GamesListResponse struct {
	ContentType                       string
	StatusCode                        int64
	GamesList200ApplicationJSONObject *GamesList200ApplicationJSON
}
