package operations

import (
	"openapi/pkg/models/shared"
)

type GetTierPathParams struct {
	TierID string `pathParam:"style=simple,explode=false,name=tier-id"`
}

type GetTierHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetTierSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetTierRequest struct {
	PathParams GetTierPathParams
	Headers    GetTierHeaders
	Security   GetTierSecurity
}

type GetTierResponse struct {
	ContentType string
	StatusCode  int64
	Tier        *shared.Tier
}
