package operations

import (
	"openapi/pkg/models/shared"
)

type CalculateLoyaltyPointsPathParams struct {
	ProgramID string `pathParam:"style=simple,explode=false,name=program_id"`
}

type CalculateLoyaltyPointsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CalculateLoyaltyPointsRequest struct {
	PathParams CalculateLoyaltyPointsPathParams
	Request    shared.CalculateLoyaltyPointsRequest `request:"mediaType=application/json"`
	Security   CalculateLoyaltyPointsSecurity
}

type CalculateLoyaltyPointsResponse struct {
	CalculateLoyaltyPointsResponse *shared.CalculateLoyaltyPointsResponse
	ContentType                    string
	StatusCode                     int64
}
