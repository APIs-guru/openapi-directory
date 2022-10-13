package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserVodsPathParams struct {
	UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUserVodsDirectionEnum string

const (
	GetUserVodsDirectionEnumAsc  GetUserVodsDirectionEnum = "asc"
	GetUserVodsDirectionEnumDesc GetUserVodsDirectionEnum = "desc"
)

type GetUserVodsFilterEnum string

const (
	GetUserVodsFilterEnumFilm   GetUserVodsFilterEnum = "film"
	GetUserVodsFilterEnumSeries GetUserVodsFilterEnum = "series"
)

type GetUserVodsSortEnum string

const (
	GetUserVodsSortEnumAdded        GetUserVodsSortEnum = "added"
	GetUserVodsSortEnumAlphabetical GetUserVodsSortEnum = "alphabetical"
	GetUserVodsSortEnumDate         GetUserVodsSortEnum = "date"
	GetUserVodsSortEnumModifiedTime GetUserVodsSortEnum = "modified_time"
	GetUserVodsSortEnumName         GetUserVodsSortEnum = "name"
	GetUserVodsSortEnumPublishTime  GetUserVodsSortEnum = "publish.time"
	GetUserVodsSortEnumRating       GetUserVodsSortEnum = "rating"
)

type GetUserVodsQueryParams struct {
	Direction *GetUserVodsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    *GetUserVodsFilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	Page      *float64                  `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                  `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetUserVodsSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetUserVodsRequest struct {
	PathParams  GetUserVodsPathParams
	QueryParams GetUserVodsQueryParams
}

type GetUserVodsResponse struct {
	ContentType   string
	StatusCode    int64
	LegacyError   *shared.LegacyError
	OnDemandPages []shared.OnDemandPage
}
