package operations

import (
	"openapi/pkg/models/shared"
)

type ListBreakTypesQueryParams struct {
	Cursor     *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	LocationID *string `queryParam:"style=form,explode=true,name=location_id"`
}

type ListBreakTypesSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListBreakTypesRequest struct {
	QueryParams ListBreakTypesQueryParams
	Security    ListBreakTypesSecurity
}

type ListBreakTypesResponse struct {
	ContentType            string
	ListBreakTypesResponse *shared.ListBreakTypesResponse
	StatusCode             int64
}
