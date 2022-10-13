package operations

import (
	"openapi/pkg/models/shared"
)

type AssetReportFilterRequest struct {
	Request shared.AssetReportFilterRequest `request:"mediaType=application/json"`
}

type AssetReportFilterResponse struct {
	AssetReportFilterResponse map[string]interface{}
	ContentType               string
	StatusCode                int64
}
