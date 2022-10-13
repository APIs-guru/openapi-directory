package operations

import (
	"openapi/pkg/models/shared"
)

type AssetReportCreateRequest struct {
	Request shared.AssetReportCreateRequest `request:"mediaType=application/json"`
}

type AssetReportCreateResponse struct {
	AssetReportCreateResponse map[string]interface{}
	ContentType               string
	StatusCode                int64
}
