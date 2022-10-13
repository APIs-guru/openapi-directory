package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupsDirectionEnum string

const (
	GetGroupsDirectionEnumAsc  GetGroupsDirectionEnum = "asc"
	GetGroupsDirectionEnumDesc GetGroupsDirectionEnum = "desc"
)

type GetGroupsFilterEnum string

const (
	GetGroupsFilterEnumFeatured GetGroupsFilterEnum = "featured"
)

type GetGroupsSortEnum string

const (
	GetGroupsSortEnumAlphabetical GetGroupsSortEnum = "alphabetical"
	GetGroupsSortEnumDate         GetGroupsSortEnum = "date"
	GetGroupsSortEnumFollowers    GetGroupsSortEnum = "followers"
	GetGroupsSortEnumRelevant     GetGroupsSortEnum = "relevant"
	GetGroupsSortEnumVideos       GetGroupsSortEnum = "videos"
)

type GetGroupsQueryParams struct {
	Direction *GetGroupsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    *GetGroupsFilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	Page      *float64                `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                 `queryParam:"style=form,explode=true,name=query"`
	Sort      *GetGroupsSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetGroupsRequest struct {
	QueryParams GetGroupsQueryParams
}

type GetGroupsResponse struct {
	ContentType string
	StatusCode  int64
	Groups      []shared.Group
}
