package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveInventoryPhysicalCountPathParams struct {
	PhysicalCountID string `pathParam:"style=simple,explode=false,name=physical_count_id"`
}

type RetrieveInventoryPhysicalCountSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveInventoryPhysicalCountRequest struct {
	PathParams RetrieveInventoryPhysicalCountPathParams
	Security   RetrieveInventoryPhysicalCountSecurity
}

type RetrieveInventoryPhysicalCountResponse struct {
	ContentType                            string
	RetrieveInventoryPhysicalCountResponse *shared.RetrieveInventoryPhysicalCountResponse
	StatusCode                             int64
}
