package operations

import (
	"openapi/pkg/models/shared"
)

type AddGroupToCustomerPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
	GroupID    string `pathParam:"style=simple,explode=false,name=group_id"`
}

type AddGroupToCustomerSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddGroupToCustomerRequest struct {
	PathParams AddGroupToCustomerPathParams
	Security   AddGroupToCustomerSecurity
}

type AddGroupToCustomerResponse struct {
	AddGroupToCustomerResponse *shared.AddGroupToCustomerResponse
	ContentType                string
	StatusCode                 int64
}
