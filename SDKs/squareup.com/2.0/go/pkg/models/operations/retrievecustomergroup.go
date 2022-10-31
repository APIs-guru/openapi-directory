package operations

import (
"openapi/pkg/models/shared")

type RetrieveCustomerGroupPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
    
}

type RetrieveCustomerGroupSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveCustomerGroupRequest struct {
    PathParams RetrieveCustomerGroupPathParams 
    Security RetrieveCustomerGroupSecurity 
    
}

type RetrieveCustomerGroupResponse struct {
    ContentType string 
    RetrieveCustomerGroupResponse *shared.RetrieveCustomerGroupResponse 
    StatusCode int64 
    
}

