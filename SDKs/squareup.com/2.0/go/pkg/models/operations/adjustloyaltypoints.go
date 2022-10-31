package operations

import (
	"openapi/pkg/models/shared"
)

type AdjustLoyaltyPointsPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
}

type AdjustLoyaltyPointsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AdjustLoyaltyPointsRequest struct {
	PathParams AdjustLoyaltyPointsPathParams
	Request    shared.AdjustLoyaltyPointsRequest `request:"mediaType=application/json"`
	Security   AdjustLoyaltyPointsSecurity
}

type AdjustLoyaltyPointsResponse struct {
	AdjustLoyaltyPointsResponse *shared.AdjustLoyaltyPointsResponse
	ContentType                 string
	StatusCode                  int64
}
