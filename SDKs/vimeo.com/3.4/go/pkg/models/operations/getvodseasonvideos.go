package operations

import (
	"openapi/pkg/models/shared"
)

type GetVodSeasonVideosPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
	SeasonID   float64 `pathParam:"style=simple,explode=false,name=season_id"`
}

type GetVodSeasonVideosFilterEnum string

const (
	GetVodSeasonVideosFilterEnumViewable GetVodSeasonVideosFilterEnum = "viewable"
)

type GetVodSeasonVideosSortEnum string

const (
	GetVodSeasonVideosSortEnumDate         GetVodSeasonVideosSortEnum = "date"
	GetVodSeasonVideosSortEnumDefault      GetVodSeasonVideosSortEnum = "default"
	GetVodSeasonVideosSortEnumManual       GetVodSeasonVideosSortEnum = "manual"
	GetVodSeasonVideosSortEnumName         GetVodSeasonVideosSortEnum = "name"
	GetVodSeasonVideosSortEnumPurchaseTime GetVodSeasonVideosSortEnum = "purchase_time"
	GetVodSeasonVideosSortEnumReleaseDate  GetVodSeasonVideosSortEnum = "release_date"
)

type GetVodSeasonVideosQueryParams struct {
	Filter  *GetVodSeasonVideosFilterEnum `queryParam:"style=form,explode=true,name=filter"`
	Page    *float64                      `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64                      `queryParam:"style=form,explode=true,name=per_page"`
	Sort    *GetVodSeasonVideosSortEnum   `queryParam:"style=form,explode=true,name=sort"`
}

type GetVodSeasonVideosRequest struct {
	PathParams  GetVodSeasonVideosPathParams
	QueryParams GetVodSeasonVideosQueryParams
}

type GetVodSeasonVideosResponse struct {
	ContentType string
	StatusCode  int64
	Videos      []shared.Video
}
