package operations

import (
"openapi/pkg/models/shared")

type GetCurrentUserGroupsQueryParams struct {
    Membership *string `queryParam:"style=form,explode=true,name=membership"`
    
}

type GetCurrentUserGroupsRequest struct {
    QueryParams GetCurrentUserGroupsQueryParams 
    
}

type GetCurrentUserGroupsResponse struct {
    ContentType string 
    Groups []shared.Group 
    StatusCode int64 
    
}

