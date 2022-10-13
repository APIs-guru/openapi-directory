package operations

import (
	"openapi/pkg/models/shared"
)

type DeprecatedRetrieveInventoryPhysicalCountPathParams struct {
	PhysicalCountID string `pathParam:"style=simple,explode=false,name=physical_count_id"`
}

type DeprecatedRetrieveInventoryPhysicalCountSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeprecatedRetrieveInventoryPhysicalCountRequest struct {
	PathParams DeprecatedRetrieveInventoryPhysicalCountPathParams
	Security   DeprecatedRetrieveInventoryPhysicalCountSecurity
}

type DeprecatedRetrieveInventoryPhysicalCountResponse struct {
	ContentType                            string
	RetrieveInventoryPhysicalCountResponse *shared.RetrieveInventoryPhysicalCountResponse
	StatusCode                             int64
}
