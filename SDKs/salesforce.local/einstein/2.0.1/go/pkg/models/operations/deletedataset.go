package operations

import (
"openapi/pkg/models/shared")

type DeleteDatasetPathParams struct {
    DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
    
}

type DeleteDatasetSecurity struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteDatasetRequest struct {
    PathParams DeleteDatasetPathParams 
    Security DeleteDatasetSecurity 
    
}

type DeleteDatasetResponse struct {
    ContentType string 
    DeletionResponse *shared.DeletionResponse 
    StatusCode int64 
    
}

