package operations

import (
	"openapi/pkg/models/shared"
)

type SplunkAssetSyncCreatedJSONQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	Search *string `queryParam:"style=form,explode=true,name=search"`
	Since  *int64  `queryParam:"style=form,explode=true,name=since"`
}

type SplunkAssetSyncCreatedJSONSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type SplunkAssetSyncCreatedJSONRequest struct {
	QueryParams SplunkAssetSyncCreatedJSONQueryParams
	Security    SplunkAssetSyncCreatedJSONSecurity
}

type SplunkAssetSyncCreatedJSONResponse struct {
	AssetsWithCheckpoint *shared.AssetsWithCheckpoint
	ContentType          string
	StatusCode           int64
}
