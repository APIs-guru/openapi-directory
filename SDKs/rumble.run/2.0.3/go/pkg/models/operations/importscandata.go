package operations

import (
	"openapi/pkg/models/shared"
)

type ImportScanDataPathParams struct {
	SiteID string `pathParam:"style=simple,explode=false,name=site_id"`
}

type ImportScanDataSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type ImportScanDataRequest struct {
	PathParams ImportScanDataPathParams
	Request    []byte `request:"mediaType=application/octet-stream"`
	Security   ImportScanDataSecurity
}

type ImportScanDataResponse struct {
	ContentType string
	StatusCode  int64
	Task        *shared.Task
}
