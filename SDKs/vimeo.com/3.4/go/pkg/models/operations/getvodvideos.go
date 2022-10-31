package operations

import (
	"openapi/pkg/models/shared"
)

type GetVodVideosPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type GetVodVideosDirectionEnum string

const (
	GetVodVideosDirectionEnumAsc  GetVodVideosDirectionEnum = "asc"
	GetVodVideosDirectionEnumDesc GetVodVideosDirectionEnum = "desc"
)

type GetVodVideosFilterEnum string

const (
	GetVodVideosFilterEnumAll          GetVodVideosFilterEnum = "all"
	GetVodVideosFilterEnumBuy          GetVodVideosFilterEnum = "buy"
	GetVodVideosFilterEnumExpiringSoon GetVodVideosFilterEnum = "expiring_soon"
	GetVodVideosFilterEnumExtra        GetVodVideosFilterEnum = "extra"
	GetVodVideosFilterEnumMain         GetVodVideosFilterEnum = "main"
	GetVodVideosFilterEnumMainViewable GetVodVideosFilterEnum = "main.viewable"
	GetVodVideosFilterEnumRent         GetVodVideosFilterEnum = "rent"
	GetVodVideosFilterEnumTrailer      GetVodVideosFilterEnum = "trailer"
	GetVodVideosFilterEnumUnwatched    GetVodVideosFilterEnum = "unwatched"
	GetVodVideosFilterEnumViewable     GetVodVideosFilterEnum = "viewable"
	GetVodVideosFilterEnumWatched      GetVodVideosFilterEnum = "watched"
)

type GetVodVideosSortEnum string

const (
	GetVodVideosSortEnumDate         GetVodVideosSortEnum = "date"
	GetVodVideosSortEnumDefault      GetVodVideosSortEnum = "default"
	GetVodVideosSortEnumEpisode      GetVodVideosSortEnum = "episode"
	GetVodVideosSortEnumManual       GetVodVideosSortEnum = "manual"
	GetVodVideosSortEnumName         GetVodVideosSortEnum = "name"
	GetVodVideosSortEnumPurchaseTime GetVodVideosSortEnum = "purchase_time"
	GetVodVideosSortEnumReleaseDate  GetVodVideosSortEnum = "release_date"
)

type GetVodVideosQueryParams struct {
	Direction *GetVodVideosDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    *GetVodVideosFilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	Page      *float64                   `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                   `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetVodVideosSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetVodVideosRequest struct {
	PathParams  GetVodVideosPathParams
	QueryParams GetVodVideosQueryParams
}

type GetVodVideosResponse struct {
	ContentType string
	StatusCode  int64
	Videos      []shared.Video
}
