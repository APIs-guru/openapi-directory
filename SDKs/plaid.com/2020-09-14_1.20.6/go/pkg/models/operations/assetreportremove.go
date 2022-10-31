package operations

import (
"openapi/pkg/models/shared")

type AssetReportRemoveRequest struct {
    Request shared.AssetReportRemoveRequest `request:"mediaType=application/json"`
    
}

type AssetReportRemoveResponse struct {
    AssetReportRemoveResponse map[string]interface{} 
    ContentType string 
    StatusCode int64 
    
}

