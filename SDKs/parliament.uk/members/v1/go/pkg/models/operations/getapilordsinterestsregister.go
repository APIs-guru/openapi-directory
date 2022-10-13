package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPILordsInterestsRegisterQueryParams struct {
	IncludeDeleted *bool   `queryParam:"style=form,explode=true,name=includeDeleted"`
	Page           *int32  `queryParam:"style=form,explode=true,name=page"`
	SearchTerm     *string `queryParam:"style=form,explode=true,name=searchTerm"`
}

type GetAPILordsInterestsRegisterRequest struct {
	QueryParams GetAPILordsInterestsRegisterQueryParams
}

type GetAPILordsInterestsRegisterResponse struct {
	Body                                       []byte
	ContentType                                string
	MembersInterestsMembersServiceSearchResult *shared.MembersInterestsMembersServiceSearchResult
	StatusCode                                 int64
}
