package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserFollowingAlt1DirectionEnum string

const (
	GetUserFollowingAlt1DirectionEnumAsc  GetUserFollowingAlt1DirectionEnum = "asc"
	GetUserFollowingAlt1DirectionEnumDesc GetUserFollowingAlt1DirectionEnum = "desc"
)

type GetUserFollowingAlt1FilterEnum string

const (
	GetUserFollowingAlt1FilterEnumOnline GetUserFollowingAlt1FilterEnum = "online"
)

type GetUserFollowingAlt1SortEnum string

const (
	GetUserFollowingAlt1SortEnumAlphabetical GetUserFollowingAlt1SortEnum = "alphabetical"
	GetUserFollowingAlt1SortEnumDate         GetUserFollowingAlt1SortEnum = "date"
)

type GetUserFollowingAlt1QueryParams struct {
	Direction *GetUserFollowingAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    *GetUserFollowingAlt1FilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	Page      *float64                           `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                           `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                            `queryParam:"style=form,explode=true,name=query"`
	Sort      *GetUserFollowingAlt1SortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetUserFollowingAlt1Request struct {
	QueryParams GetUserFollowingAlt1QueryParams
}

type GetUserFollowingAlt1Response struct {
	ContentType string
	StatusCode  int64
	Users       []shared.User
}
