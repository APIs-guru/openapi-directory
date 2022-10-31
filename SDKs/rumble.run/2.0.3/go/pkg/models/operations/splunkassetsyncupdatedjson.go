package operations

import (
	"openapi/pkg/models/shared"
)

type SplunkAssetSyncUpdatedJSONQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	Search *string `queryParam:"style=form,explode=true,name=search"`
	Since  *int64  `queryParam:"style=form,explode=true,name=since"`
}

type SplunkAssetSyncUpdatedJSONSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type SplunkAssetSyncUpdatedJSONRequest struct {
	QueryParams SplunkAssetSyncUpdatedJSONQueryParams
	Security    SplunkAssetSyncUpdatedJSONSecurity
}

type SplunkAssetSyncUpdatedJSONResponse struct {
	AssetsWithCheckpoint *shared.AssetsWithCheckpoint
	ContentType          string
	StatusCode           int64
}
