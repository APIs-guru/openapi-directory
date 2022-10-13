package operations

import (
	"openapi/pkg/models/shared"
)

type PutProductsReviewsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutProductsReviewsIDRequestBody struct {
	Body   *string `json:"body"`
	Rating *int64  `json:"rating"`
	Title  *string `json:"title"`
}

type PutProductsReviewsIDSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutProductsReviewsIDRequest struct {
	PathParams PutProductsReviewsIDPathParams
	Request    *PutProductsReviewsIDRequestBody `request:"mediaType=application/json"`
	Security   PutProductsReviewsIDSecurity
}

type PutProductsReviewsIDResponse struct {
	ContentType string
	StatusCode  int64
}
