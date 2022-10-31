package operations

import (
"openapi/pkg/models/shared")

type GetAttributesComputedQueryParams struct {
    All *bool `queryParam:"style=form,explode=true,name=all"`
    DeviceID *int64 `queryParam:"style=form,explode=true,name=deviceId"`
    GroupID *int64 `queryParam:"style=form,explode=true,name=groupId"`
    Refresh *bool `queryParam:"style=form,explode=true,name=refresh"`
    UserID *int64 `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetAttributesComputedRequest struct {
    QueryParams GetAttributesComputedQueryParams 
    
}

type GetAttributesComputedResponse struct {
    Attributes []shared.Attribute 
    ContentType string 
    StatusCode int64 
    
}

