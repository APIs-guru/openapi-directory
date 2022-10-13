package operations

import (
	"openapi/pkg/models/shared"
)

type GetFollowersAlt1DirectionEnum string

const (
	GetFollowersAlt1DirectionEnumAsc  GetFollowersAlt1DirectionEnum = "asc"
	GetFollowersAlt1DirectionEnumDesc GetFollowersAlt1DirectionEnum = "desc"
)

type GetFollowersAlt1SortEnum string

const (
	GetFollowersAlt1SortEnumAlphabetical GetFollowersAlt1SortEnum = "alphabetical"
	GetFollowersAlt1SortEnumDate         GetFollowersAlt1SortEnum = "date"
)

type GetFollowersAlt1QueryParams struct {
	Direction *GetFollowersAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *float64                       `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                       `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                        `queryParam:"style=form,explode=true,name=query"`
	Sort      *GetFollowersAlt1SortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetFollowersAlt1Request struct {
	QueryParams GetFollowersAlt1QueryParams
}

type GetFollowersAlt1Response struct {
	ContentType string
	StatusCode  int64
	Users       []shared.User
}
