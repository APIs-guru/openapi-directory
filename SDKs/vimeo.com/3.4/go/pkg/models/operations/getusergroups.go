package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserGroupsPathParams struct {
	UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUserGroupsDirectionEnum string

const (
	GetUserGroupsDirectionEnumAsc  GetUserGroupsDirectionEnum = "asc"
	GetUserGroupsDirectionEnumDesc GetUserGroupsDirectionEnum = "desc"
)

type GetUserGroupsFilterEnum string

const (
	GetUserGroupsFilterEnumModerated GetUserGroupsFilterEnum = "moderated"
)

type GetUserGroupsSortEnum string

const (
	GetUserGroupsSortEnumAlphabetical GetUserGroupsSortEnum = "alphabetical"
	GetUserGroupsSortEnumDate         GetUserGroupsSortEnum = "date"
	GetUserGroupsSortEnumMembers      GetUserGroupsSortEnum = "members"
	GetUserGroupsSortEnumVideos       GetUserGroupsSortEnum = "videos"
)

type GetUserGroupsQueryParams struct {
	Direction *GetUserGroupsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    *GetUserGroupsFilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	Page      *float64                    `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                    `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                     `queryParam:"style=form,explode=true,name=query"`
	Sort      *GetUserGroupsSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetUserGroupsRequest struct {
	PathParams  GetUserGroupsPathParams
	QueryParams GetUserGroupsQueryParams
}

type GetUserGroupsResponse struct {
	ContentType string
	StatusCode  int64
	Groups      []shared.Group
}
