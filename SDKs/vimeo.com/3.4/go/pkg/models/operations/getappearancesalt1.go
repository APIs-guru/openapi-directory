package operations

import (
	"openapi/pkg/models/shared"
)

type GetAppearancesAlt1DirectionEnum string

const (
	GetAppearancesAlt1DirectionEnumAsc  GetAppearancesAlt1DirectionEnum = "asc"
	GetAppearancesAlt1DirectionEnumDesc GetAppearancesAlt1DirectionEnum = "desc"
)

type GetAppearancesAlt1FilterEnum string

const (
	GetAppearancesAlt1FilterEnumEmbeddable GetAppearancesAlt1FilterEnum = "embeddable"
)

type GetAppearancesAlt1SortEnum string

const (
	GetAppearancesAlt1SortEnumAlphabetical GetAppearancesAlt1SortEnum = "alphabetical"
	GetAppearancesAlt1SortEnumComments     GetAppearancesAlt1SortEnum = "comments"
	GetAppearancesAlt1SortEnumDate         GetAppearancesAlt1SortEnum = "date"
	GetAppearancesAlt1SortEnumDuration     GetAppearancesAlt1SortEnum = "duration"
	GetAppearancesAlt1SortEnumLikes        GetAppearancesAlt1SortEnum = "likes"
	GetAppearancesAlt1SortEnumPlays        GetAppearancesAlt1SortEnum = "plays"
)

type GetAppearancesAlt1QueryParams struct {
	Direction        *GetAppearancesAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter           *GetAppearancesAlt1FilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	FilterEmbeddable *bool                            `queryParam:"style=form,explode=true,name=filter_embeddable"`
	Page             *float64                         `queryParam:"style=form,explode=true,name=page"`
	PerPage          *float64                         `queryParam:"style=form,explode=true,name=per_page"`
	Query            *string                          `queryParam:"style=form,explode=true,name=query"`
	Sort             *GetAppearancesAlt1SortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetAppearancesAlt1Request struct {
	QueryParams GetAppearancesAlt1QueryParams
}

type GetAppearancesAlt1Response struct {
	ContentType string
	StatusCode  int64
	Videos      []shared.Video
}
