package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPILordsInterestsStaffQueryParams struct {
	Page       *int32  `queryParam:"style=form,explode=true,name=page"`
	SearchTerm *string `queryParam:"style=form,explode=true,name=searchTerm"`
}

type GetAPILordsInterestsStaffRequest struct {
	QueryParams GetAPILordsInterestsStaffQueryParams
}

type GetAPILordsInterestsStaffResponse struct {
	Body                                   []byte
	ContentType                            string
	MembersStaffMembersServiceSearchResult *shared.MembersStaffMembersServiceSearchResult
	StatusCode                             int64
}
