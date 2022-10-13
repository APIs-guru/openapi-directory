package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyRefundRequestsSellingSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyRefundRequestsSellingRequest struct {
	Security GetMyRefundRequestsSellingSecurity
}

type GetMyRefundRequestsSellingResponse struct {
	ContentType string
	StatusCode  int64
}
