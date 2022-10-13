package operations

import (
	"openapi/pkg/models/shared"
)

type GetSalesSellerSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetSalesSellerRequest struct {
	Security GetSalesSellerSecurity
}

type GetSalesSellerResponse struct {
	ContentType string
	StatusCode  int64
}
