package operations

import (
	"openapi/pkg/models/shared"
)

type AccountCtrlGetLocationByIDPathParams struct {
	AccountID  float64 `pathParam:"style=simple,explode=false,name=account_id"`
	LocationID float64 `pathParam:"style=simple,explode=false,name=location_id"`
}

type AccountCtrlGetLocationByIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type AccountCtrlGetLocationByIDRequest struct {
	PathParams AccountCtrlGetLocationByIDPathParams
	Security   AccountCtrlGetLocationByIDSecurity
}

type AccountCtrlGetLocationByIDResponse struct {
	ContentType         string
	LocationHalResponse *shared.LocationHalResponse
	StatusCode          int64
}
