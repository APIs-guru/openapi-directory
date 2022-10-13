package operations

import (
	"openapi/pkg/models/shared"
)

type GamesScreenshotsListPathParams struct {
	GamePk string `pathParam:"style=simple,explode=false,name=game_pk"`
}

type GamesScreenshotsListQueryParams struct {
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type GamesScreenshotsListRequest struct {
	PathParams  GamesScreenshotsListPathParams
	QueryParams GamesScreenshotsListQueryParams
}

type GamesScreenshotsList200ApplicationJSON struct {
	Count    int64               `json:"count"`
	Next     *string             `json:"next"`
	Previous *string             `json:"previous"`
	Results  []shared.ScreenShot `json:"results"`
}

type GamesScreenshotsListResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GamesScreenshotsList200ApplicationJSONObject *GamesScreenshotsList200ApplicationJSON
}
