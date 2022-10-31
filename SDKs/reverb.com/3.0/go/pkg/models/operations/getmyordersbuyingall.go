package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyOrdersBuyingAllSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyOrdersBuyingAllRequest struct {
	Security GetMyOrdersBuyingAllSecurity
}

type GetMyOrdersBuyingAllResponse struct {
	ContentType string
	StatusCode  int64
}
