package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCustomerPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customer_id"`
}

type UpdateCustomerSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type UpdateCustomerRequest struct {
	PathParams UpdateCustomerPathParams
	Request    shared.UpdateCustomerRequest `request:"mediaType=application/json"`
	Security   UpdateCustomerSecurity
}

type UpdateCustomerResponse struct {
	ContentType            string
	StatusCode             int64
	UpdateCustomerResponse *shared.UpdateCustomerResponse
}
