package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyOrdersSellingUnpaidSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyOrdersSellingUnpaidRequest struct {
	Security GetMyOrdersSellingUnpaidSecurity
}

type GetMyOrdersSellingUnpaidResponse struct {
	ContentType string
	StatusCode  int64
}
