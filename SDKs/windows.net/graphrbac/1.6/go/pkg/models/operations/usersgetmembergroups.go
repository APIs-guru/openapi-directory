package operations

import (
"openapi/pkg/models/shared")

type UsersGetMemberGroupsPathParams struct {
    ObjectID string `pathParam:"style=simple,explode=false,name=objectId"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
    
}

type UsersGetMemberGroupsQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    
}

type UsersGetMemberGroupsRequests struct {
    UserGetMemberGroupsParameters map[string]map[string]interface{} `request:"mediaType=application/json"`
    UserGetMemberGroupsParameters1 map[string]map[string]interface{} `request:"mediaType=text/json"`
    
}

type UsersGetMemberGroupsRequest struct {
    PathParams UsersGetMemberGroupsPathParams 
    QueryParams UsersGetMemberGroupsQueryParams 
    Request UsersGetMemberGroupsRequests 
    
}

type UsersGetMemberGroupsResponse struct {
    ContentType string 
    GraphError *shared.GraphError 
    StatusCode int64 
    UserGetMemberGroupsResult *shared.UserGetMemberGroupsResult 
    
}

