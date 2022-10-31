package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSalesSaleIDListingsPathParams struct {
	SaleID string `pathParam:"style=simple,explode=false,name=sale_id"`
}

type DeleteSalesSaleIDListingsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteSalesSaleIDListingsRequest struct {
	PathParams DeleteSalesSaleIDListingsPathParams
	Security   DeleteSalesSaleIDListingsSecurity
}

type DeleteSalesSaleIDListingsResponse struct {
	ContentType string
	StatusCode  int64
}
