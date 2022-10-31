package operations

import (
"openapi/pkg/models/shared")

type SearchOrdersSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type SearchOrdersRequest struct {
    Request shared.SearchOrdersRequest `request:"mediaType=application/json"`
    Security SearchOrdersSecurity 
    
}

type SearchOrdersResponse struct {
    ContentType string 
    SearchOrdersResponse *shared.SearchOrdersResponse 
    StatusCode int64 
    
}

