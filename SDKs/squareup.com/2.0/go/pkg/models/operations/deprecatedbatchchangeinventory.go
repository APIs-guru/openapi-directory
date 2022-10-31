package operations

import (
"openapi/pkg/models/shared")

type DeprecatedBatchChangeInventorySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeprecatedBatchChangeInventoryRequest struct {
    Request shared.BatchChangeInventoryRequest `request:"mediaType=application/json"`
    Security DeprecatedBatchChangeInventorySecurity 
    
}

type DeprecatedBatchChangeInventoryResponse struct {
    BatchChangeInventoryResponse *shared.BatchChangeInventoryResponse 
    ContentType string 
    StatusCode int64 
    
}

