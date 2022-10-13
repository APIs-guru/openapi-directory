package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupMembersPathParams struct {
	GroupID float64 `pathParam:"style=simple,explode=false,name=group_id"`
}

type GetGroupMembersDirectionEnum string

const (
	GetGroupMembersDirectionEnumAsc  GetGroupMembersDirectionEnum = "asc"
	GetGroupMembersDirectionEnumDesc GetGroupMembersDirectionEnum = "desc"
)

type GetGroupMembersFilterEnum string

const (
	GetGroupMembersFilterEnumModerators GetGroupMembersFilterEnum = "moderators"
)

type GetGroupMembersSortEnum string

const (
	GetGroupMembersSortEnumAlphabetical GetGroupMembersSortEnum = "alphabetical"
	GetGroupMembersSortEnumDate         GetGroupMembersSortEnum = "date"
)

type GetGroupMembersQueryParams struct {
	Direction *GetGroupMembersDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Filter    *GetGroupMembersFilterEnum    `queryParam:"style=form,explode=true,name=filter"`
	Page      *float64                      `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                      `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                       `queryParam:"style=form,explode=true,name=query"`
	Sort      *GetGroupMembersSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetGroupMembersRequest struct {
	PathParams  GetGroupMembersPathParams
	QueryParams GetGroupMembersQueryParams
}

type GetGroupMembersResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Users       []shared.User
}
