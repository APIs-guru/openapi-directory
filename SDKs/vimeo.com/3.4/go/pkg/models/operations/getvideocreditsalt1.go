package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoCreditsAlt1PathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
	VideoID   float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type GetVideoCreditsAlt1DirectionEnum string

const (
	GetVideoCreditsAlt1DirectionEnumAsc  GetVideoCreditsAlt1DirectionEnum = "asc"
	GetVideoCreditsAlt1DirectionEnumDesc GetVideoCreditsAlt1DirectionEnum = "desc"
)

type GetVideoCreditsAlt1SortEnum string

const (
	GetVideoCreditsAlt1SortEnumAlphabetical GetVideoCreditsAlt1SortEnum = "alphabetical"
	GetVideoCreditsAlt1SortEnumDate         GetVideoCreditsAlt1SortEnum = "date"
)

type GetVideoCreditsAlt1QueryParams struct {
	Direction *GetVideoCreditsAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *float64                          `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                          `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                           `queryParam:"style=form,explode=true,name=query"`
	Sort      *GetVideoCreditsAlt1SortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetVideoCreditsAlt1Request struct {
	PathParams  GetVideoCreditsAlt1PathParams
	QueryParams GetVideoCreditsAlt1QueryParams
}

type GetVideoCreditsAlt1Response struct {
	ContentType string
	StatusCode  int64
	Credits     []shared.Credit
}
