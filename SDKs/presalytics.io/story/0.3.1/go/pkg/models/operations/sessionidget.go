package operations

import (
"openapi/pkg/models/shared")

type SessionIDGetPathParams struct {
    SessionID string `pathParam:"style=simple,explode=false,name=session_id"`
    
}

type SessionIDGetQueryParams struct {
    IncludeRelationships *bool `queryParam:"style=form,explode=true,name=include_relationships"`
    
}

type SessionIDGetRequest struct {
    PathParams SessionIDGetPathParams 
    QueryParams SessionIDGetQueryParams 
    
}

type SessionIDGetResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    Session *shared.Session 
    
}

