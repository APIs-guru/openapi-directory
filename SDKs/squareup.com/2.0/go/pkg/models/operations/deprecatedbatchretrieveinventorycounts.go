package operations

import (
	"openapi/pkg/models/shared"
)

type DeprecatedBatchRetrieveInventoryCountsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeprecatedBatchRetrieveInventoryCountsRequest struct {
	Request  shared.BatchRetrieveInventoryCountsRequest `request:"mediaType=application/json"`
	Security DeprecatedBatchRetrieveInventoryCountsSecurity
}

type DeprecatedBatchRetrieveInventoryCountsResponse struct {
	BatchRetrieveInventoryCountsResponse *shared.BatchRetrieveInventoryCountsResponse
	ContentType                          string
	StatusCode                           int64
}
