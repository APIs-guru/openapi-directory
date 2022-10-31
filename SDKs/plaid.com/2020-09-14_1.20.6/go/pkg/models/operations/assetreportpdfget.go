package operations

import (
"openapi/pkg/models/shared")

type AssetReportPdfGetRequest struct {
    Request shared.AssetReportPdfGetRequest `request:"mediaType=application/json"`
    
}

type AssetReportPdfGetResponse struct {
    AssetReportPdfGetResponse []byte 
    ContentType string 
    StatusCode int64 
    
}

