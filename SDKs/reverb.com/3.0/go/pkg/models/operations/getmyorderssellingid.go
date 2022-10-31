package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyOrdersSellingIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetMyOrdersSellingIDSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyOrdersSellingIDRequest struct {
	PathParams GetMyOrdersSellingIDPathParams
	Security   GetMyOrdersSellingIDSecurity
}

type GetMyOrdersSellingIDResponse struct {
	ContentType string
	StatusCode  int64
}
