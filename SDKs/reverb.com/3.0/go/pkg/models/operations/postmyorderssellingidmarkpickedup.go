package operations

import (
	"openapi/pkg/models/shared"
)

type PostMyOrdersSellingIDMarkPickedUpPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostMyOrdersSellingIDMarkPickedUpRequestBody struct {
	Date *string `json:"date,omitempty"`
}

type PostMyOrdersSellingIDMarkPickedUpSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostMyOrdersSellingIDMarkPickedUpRequest struct {
	PathParams PostMyOrdersSellingIDMarkPickedUpPathParams
	Request    *PostMyOrdersSellingIDMarkPickedUpRequestBody `request:"mediaType=application/json"`
	Security   PostMyOrdersSellingIDMarkPickedUpSecurity
}

type PostMyOrdersSellingIDMarkPickedUpResponse struct {
	ContentType string
	StatusCode  int64
}
