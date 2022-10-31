package operations

import (
	"openapi/pkg/models/shared"
)

type SearchUsersDirectionEnum string

const (
	SearchUsersDirectionEnumAsc  SearchUsersDirectionEnum = "asc"
	SearchUsersDirectionEnumDesc SearchUsersDirectionEnum = "desc"
)

type SearchUsersSortEnum string

const (
	SearchUsersSortEnumAlphabetical SearchUsersSortEnum = "alphabetical"
	SearchUsersSortEnumDate         SearchUsersSortEnum = "date"
	SearchUsersSortEnumFollowers    SearchUsersSortEnum = "followers"
	SearchUsersSortEnumRelevant     SearchUsersSortEnum = "relevant"
	SearchUsersSortEnumVideos       SearchUsersSortEnum = "videos"
)

type SearchUsersQueryParams struct {
	Direction *SearchUsersDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *float64                  `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                  `queryParam:"style=form,explode=true,name=per_page"`
	Query     *string                   `queryParam:"style=form,explode=true,name=query"`
	Sort      *SearchUsersSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type SearchUsersRequest struct {
	QueryParams SearchUsersQueryParams
}

type SearchUsersResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Users       []shared.User
}
