package operations

import (
"openapi/pkg/models/shared")

type GroupsRemoveMemberPathParams struct {
    GroupObjectID string `pathParam:"style=simple,explode=false,name=groupObjectId"`
    MemberObjectID string `pathParam:"style=simple,explode=false,name=memberObjectId"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
    
}

type GroupsRemoveMemberQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    
}

type GroupsRemoveMemberRequest struct {
    PathParams GroupsRemoveMemberPathParams 
    QueryParams GroupsRemoveMemberQueryParams 
    
}

type GroupsRemoveMemberResponse struct {
    ContentType string 
    GraphError *shared.GraphError 
    StatusCode int64 
    
}

