package operations

import (
	"openapi/pkg/models/shared"
)

type ListCustomerGroupsQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
}

type ListCustomerGroupsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListCustomerGroupsRequest struct {
	QueryParams ListCustomerGroupsQueryParams
	Security    ListCustomerGroupsSecurity
}

type ListCustomerGroupsResponse struct {
	ContentType                string
	ListCustomerGroupsResponse *shared.ListCustomerGroupsResponse
	StatusCode                 int64
}
