package operations

import (
	"openapi/pkg/models/shared"
)

type SnowExportAssetsJSONSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type SnowExportAssetsJSONRequest struct {
	Security SnowExportAssetsJSONSecurity
}

type SnowExportAssetsJSONResponse struct {
	AssetServiceNows []shared.AssetServiceNow
	ContentType      string
	StatusCode       int64
}
