package operations

import (
"openapi/pkg/models/shared")

type GetCallsQueryParams struct {
    Validate *int64 `queryParam:"style=form,explode=true,name=validate"`
    
}

type GetCallsRequest struct {
    QueryParams GetCallsQueryParams 
    
}

type GetCallsResponse struct {
    ContentType string 
    StatusCode int64 
    OneGetResponses200ContentApplication1jsonSchema *shared.OneGetResponses200ContentApplication1jsonSchema 
    OneannouncementsPostResponses400ContentApplication1jsonSchema *shared.OneannouncementsPostResponses400ContentApplication1jsonSchema 
    OneannouncementsPostResponses403ContentApplication1jsonSchema *shared.OneannouncementsPostResponses403ContentApplication1jsonSchema 
    
}

