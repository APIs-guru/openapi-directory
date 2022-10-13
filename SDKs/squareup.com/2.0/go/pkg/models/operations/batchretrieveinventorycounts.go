package operations

import (
	"openapi/pkg/models/shared"
)

type BatchRetrieveInventoryCountsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type BatchRetrieveInventoryCountsRequest struct {
	Request  shared.BatchRetrieveInventoryCountsRequest `request:"mediaType=application/json"`
	Security BatchRetrieveInventoryCountsSecurity
}

type BatchRetrieveInventoryCountsResponse struct {
	BatchRetrieveInventoryCountsResponse *shared.BatchRetrieveInventoryCountsResponse
	ContentType                          string
	StatusCode                           int64
}
