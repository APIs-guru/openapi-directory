package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveSettlementPathParams struct {
	LocationID   string `pathParam:"style=simple,explode=false,name=location_id"`
	SettlementID string `pathParam:"style=simple,explode=false,name=settlement_id"`
}

type RetrieveSettlementSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveSettlementRequest struct {
	PathParams RetrieveSettlementPathParams
	Security   RetrieveSettlementSecurity
}

type RetrieveSettlementResponse struct {
	ContentType  string
	StatusCode   int64
	V1Settlement *shared.V1Settlement
}
