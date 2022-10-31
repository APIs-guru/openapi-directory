package operations

import (
	"openapi/pkg/models/shared"
)

type ListCustomersQueryParams struct {
	Cursor    *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit     *int64  `queryParam:"style=form,explode=true,name=limit"`
	SortField *string `queryParam:"style=form,explode=true,name=sort_field"`
	SortOrder *string `queryParam:"style=form,explode=true,name=sort_order"`
}

type ListCustomersSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListCustomersRequest struct {
	QueryParams ListCustomersQueryParams
	Security    ListCustomersSecurity
}

type ListCustomersResponse struct {
	ContentType           string
	ListCustomersResponse *shared.ListCustomersResponse
	StatusCode            int64
}
