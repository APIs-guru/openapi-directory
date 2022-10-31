package operations

import (
"openapi/pkg/models/shared")

type AssetReportRefreshRequest struct {
    Request shared.AssetReportRefreshRequest `request:"mediaType=application/json"`
    
}

type AssetReportRefreshResponse struct {
    AssetReportRefreshResponse map[string]interface{} 
    ContentType string 
    StatusCode int64 
    
}

