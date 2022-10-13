package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPILocationConstituencySearchQueryParams struct {
	SearchText *string `queryParam:"style=form,explode=true,name=searchText"`
	Skip       *int32  `queryParam:"style=form,explode=true,name=skip"`
	Take       *int32  `queryParam:"style=form,explode=true,name=take"`
}

type GetAPILocationConstituencySearchRequest struct {
	QueryParams GetAPILocationConstituencySearchQueryParams
}

type GetAPILocationConstituencySearchResponse struct {
	Body                                   []byte
	ConstituencyMembersServiceSearchResult *shared.ConstituencyMembersServiceSearchResult
	ContentType                            string
	StatusCode                             int64
}
