package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyOrdersSellingAllSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyOrdersSellingAllRequest struct {
	Security GetMyOrdersSellingAllSecurity
}

type GetMyOrdersSellingAllResponse struct {
	ContentType string
	StatusCode  int64
}
