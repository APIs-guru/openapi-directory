package operations

import (
	"openapi/pkg/models/shared"
)

type PostSalesSaleIDListingsPathParams struct {
	SaleID string `pathParam:"style=simple,explode=false,name=sale_id"`
}

type PostSalesSaleIDListingsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostSalesSaleIDListingsRequest struct {
	PathParams PostSalesSaleIDListingsPathParams
	Security   PostSalesSaleIDListingsSecurity
}

type PostSalesSaleIDListingsResponse struct {
	ContentType string
	StatusCode  int64
}
