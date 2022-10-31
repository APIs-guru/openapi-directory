package operations

import (
"openapi/pkg/models/shared")

type BatchRetrieveOrdersSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type BatchRetrieveOrdersRequest struct {
    Request shared.BatchRetrieveOrdersRequest `request:"mediaType=application/json"`
    Security BatchRetrieveOrdersSecurity 
    
}

type BatchRetrieveOrdersResponse struct {
    BatchRetrieveOrdersResponse *shared.BatchRetrieveOrdersResponse 
    ContentType string 
    StatusCode int64 
    
}

