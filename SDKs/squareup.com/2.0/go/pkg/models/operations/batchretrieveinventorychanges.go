package operations

import (
"openapi/pkg/models/shared")

type BatchRetrieveInventoryChangesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type BatchRetrieveInventoryChangesRequest struct {
    Request shared.BatchRetrieveInventoryChangesRequest `request:"mediaType=application/json"`
    Security BatchRetrieveInventoryChangesSecurity 
    
}

type BatchRetrieveInventoryChangesResponse struct {
    BatchRetrieveInventoryChangesResponse *shared.BatchRetrieveInventoryChangesResponse 
    ContentType string 
    StatusCode int64 
    
}

