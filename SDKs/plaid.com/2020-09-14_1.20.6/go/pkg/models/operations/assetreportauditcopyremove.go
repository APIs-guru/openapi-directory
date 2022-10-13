package operations

import (
	"openapi/pkg/models/shared"
)

type AssetReportAuditCopyRemoveRequest struct {
	Request shared.AssetReportAuditCopyRemoveRequest `request:"mediaType=application/json"`
}

type AssetReportAuditCopyRemoveResponse struct {
	AssetReportAuditCopyRemoveResponse map[string]interface{}
	ContentType                        string
	StatusCode                         int64
}
