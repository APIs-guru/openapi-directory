package operations

import (
	"openapi/pkg/models/shared"
)

type AssetReportGetRequest struct {
	Request shared.AssetReportGetRequest `request:"mediaType=application/json"`
}

type AssetReportGetResponse struct {
	AssetReportGetResponse map[string]interface{}
	ContentType            string
	StatusCode             int64
}
