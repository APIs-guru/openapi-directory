package operations

import (
"openapi/pkg/models/shared")

type ListServiceCredentialsQueryParams struct {
    Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
    
}

type ListServiceCredentialsRequest struct {
    QueryParams ListServiceCredentialsQueryParams 
    
}

type ListServiceCredentialsResponse struct {
    ContentType string 
    ServiceCredentialsCollection *shared.ServiceCredentialsCollection 
    StatusCode int64 
    
}

