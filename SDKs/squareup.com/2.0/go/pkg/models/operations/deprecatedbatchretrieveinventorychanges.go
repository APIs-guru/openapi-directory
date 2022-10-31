package operations

import (
"openapi/pkg/models/shared")

type DeprecatedBatchRetrieveInventoryChangesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeprecatedBatchRetrieveInventoryChangesRequest struct {
    Request shared.BatchRetrieveInventoryChangesRequest `request:"mediaType=application/json"`
    Security DeprecatedBatchRetrieveInventoryChangesSecurity 
    
}

type DeprecatedBatchRetrieveInventoryChangesResponse struct {
    BatchRetrieveInventoryChangesResponse *shared.BatchRetrieveInventoryChangesResponse 
    ContentType string 
    StatusCode int64 
    
}

