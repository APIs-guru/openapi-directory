package operations

import (
"openapi/pkg/models/shared")

type AssetReportAuditCopyGetRequest struct {
    Request shared.AssetReportAuditCopyGetRequest `request:"mediaType=application/json"`
    
}

type AssetReportAuditCopyGetResponse struct {
    AssetReportGetResponse map[string]interface{} 
    ContentType string 
    StatusCode int64 
    
}

