package operations

import (
	"openapi/pkg/models/shared"
)

type AssetReportAuditCopyCreateRequest struct {
	Request shared.AssetReportAuditCopyCreateRequest `request:"mediaType=application/json"`
}

type AssetReportAuditCopyCreateResponse struct {
	AssetReportAuditCopyCreateResponse map[string]interface{}
	ContentType                        string
	StatusCode                         int64
}
