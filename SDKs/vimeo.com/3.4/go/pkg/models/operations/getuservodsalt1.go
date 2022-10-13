package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserVodsAlt1DirectionEnum string

const (
	GetUserVodsAlt1DirectionEnumAsc  GetUserVodsAlt1DirectionEnum = "asc"
	GetUserVodsAlt1DirectionEnumDesc GetUserVodsAlt1DirectionEnum = "desc"
)

type GetUserVodsAlt1FilterEnum string

const (
	GetUserVodsAlt1FilterEnumFilm   GetUserVodsAlt1FilterEnum = "film"
	GetUserVodsAlt1FilterEnumSeries GetUserVodsAlt1FilterEnum = "series"
)

type GetUserVodsAlt1SortEnum string

const (
	GetUserVodsAlt1SortEnumAdded        GetUserVodsAlt1SortEnum = "added"
	GetUserVodsAlt1SortEnumAlphabetical GetUserVodsAlt1SortEnum = "alphabetical"
	GetUserVodsAlt1SortEnumDate         GetUserVodsAlt1SortEnum = "date"
	GetUserVodsAlt1SortEnumModifiedTime GetUserVodsAlt1SortEnum = "modified_time"
	GetUserVodsAlt1SortEnumName         GetUserVodsAlt1SortEnum = "name"
	GetUserVodsAlt1SortEnumPublishTime  GetUserVodsAlt1SortEnum = "publish.time"
	GetUserVodsAlt1SortEnumRating       GetUserVodsAlt1SortEnum = "rating"
)

type GetUserVodsAlt1QueryParams struct {
	Direction *GetUserVodsAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    *GetUserVodsAlt1FilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	Page      *float64                      `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                      `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetUserVodsAlt1SortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetUserVodsAlt1Request struct {
	QueryParams GetUserVodsAlt1QueryParams
}

type GetUserVodsAlt1Response struct {
	ContentType   string
	StatusCode    int64
	LegacyError   *shared.LegacyError
	OnDemandPages []shared.OnDemandPage
}
