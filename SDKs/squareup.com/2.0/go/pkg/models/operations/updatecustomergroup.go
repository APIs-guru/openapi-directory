package operations

import (
"openapi/pkg/models/shared")

type UpdateCustomerGroupPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
    
}

type UpdateCustomerGroupSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UpdateCustomerGroupRequest struct {
    PathParams UpdateCustomerGroupPathParams 
    Request shared.UpdateCustomerGroupRequest `request:"mediaType=application/json"`
    Security UpdateCustomerGroupSecurity 
    
}

type UpdateCustomerGroupResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateCustomerGroupResponse *shared.UpdateCustomerGroupResponse 
    
}

