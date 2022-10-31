package operations

import (
	"openapi/pkg/models/shared"
)

type PutMyRefundRequestsSellingIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutMyRefundRequestsSellingIDSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutMyRefundRequestsSellingIDRequest struct {
	PathParams PutMyRefundRequestsSellingIDPathParams
	Security   PutMyRefundRequestsSellingIDSecurity
}

type PutMyRefundRequestsSellingIDResponse struct {
	ContentType string
	StatusCode  int64
}
