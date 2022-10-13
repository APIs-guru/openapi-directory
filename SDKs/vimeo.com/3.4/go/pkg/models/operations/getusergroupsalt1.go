package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserGroupsAlt1DirectionEnum string

const (
	GetUserGroupsAlt1DirectionEnumAsc  GetUserGroupsAlt1DirectionEnum = "asc"
	GetUserGroupsAlt1DirectionEnumDesc GetUserGroupsAlt1DirectionEnum = "desc"
)

type GetUserGroupsAlt1FilterEnum string

const (
	GetUserGroupsAlt1FilterEnumModerated GetUserGroupsAlt1FilterEnum = "moderated"
)

type GetUserGroupsAlt1SortEnum string

const (
	GetUserGroupsAlt1SortEnumAlphabetical GetUserGroupsAlt1SortEnum = "alphabetical"
	GetUserGroupsAlt1SortEnumDate         GetUserGroupsAlt1SortEnum = "date"
	GetUserGroupsAlt1SortEnumMembers      GetUserGroupsAlt1SortEnum = "members"
	GetUserGroupsAlt1SortEnumVideos       GetUserGroupsAlt1SortEnum = "videos"
)

type GetUserGroupsAlt1QueryParams struct {
	Direction *GetUserGroupsAlt1DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    *GetUserGroupsAlt1FilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	Page      *float64                        `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                        `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                         `queryParam:"style=form,explode=true,name=query"`
	Sort      *GetUserGroupsAlt1SortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetUserGroupsAlt1Request struct {
	QueryParams GetUserGroupsAlt1QueryParams
}

type GetUserGroupsAlt1Response struct {
	ContentType string
	StatusCode  int64
	Groups      []shared.Group
}
