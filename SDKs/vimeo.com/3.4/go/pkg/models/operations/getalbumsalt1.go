package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlbumsAlt1DirectionEnum string

const (
	GetAlbumsAlt1DirectionEnumAsc  GetAlbumsAlt1DirectionEnum = "asc"
	GetAlbumsAlt1DirectionEnumDesc GetAlbumsAlt1DirectionEnum = "desc"
)

type GetAlbumsAlt1SortEnum string

const (
	GetAlbumsAlt1SortEnumAlphabetical GetAlbumsAlt1SortEnum = "alphabetical"
	GetAlbumsAlt1SortEnumDate         GetAlbumsAlt1SortEnum = "date"
	GetAlbumsAlt1SortEnumDuration     GetAlbumsAlt1SortEnum = "duration"
	GetAlbumsAlt1SortEnumVideos       GetAlbumsAlt1SortEnum = "videos"
)

type GetAlbumsAlt1QueryParams struct {
	Direction *GetAlbumsAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *float64                    `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                    `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                     `queryParam:"style=form,explode=true,name=query"`
	Sort      *GetAlbumsAlt1SortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetAlbumsAlt1Request struct {
	QueryParams GetAlbumsAlt1QueryParams
}

type GetAlbumsAlt1Response struct {
	ContentType string
	StatusCode  int64
	Albums      []shared.Album
	LegacyError *shared.LegacyError
}
