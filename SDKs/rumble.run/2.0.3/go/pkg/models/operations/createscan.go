package operations

import (
	"openapi/pkg/models/shared"
)

type CreateScanPathParams struct {
	SiteID string `pathParam:"style=simple,explode=false,name=site_id"`
}

type CreateScanSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type CreateScanRequest struct {
	PathParams CreateScanPathParams
	Request    *shared.ScanOptions `request:"mediaType=text/json"`
	Security   CreateScanSecurity
}

type CreateScanResponse struct {
	ContentType string
	StatusCode  int64
	Task        *shared.Task
}
