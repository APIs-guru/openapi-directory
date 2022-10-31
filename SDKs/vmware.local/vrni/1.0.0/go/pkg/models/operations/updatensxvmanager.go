package operations

import (
"openapi/pkg/models/shared")

type UpdateNsxvManagerPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateNsxvManagerSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateNsxvManagerRequest struct {
    PathParams UpdateNsxvManagerPathParams 
    Request *shared.NsxvManagerDataSource `request:"mediaType=application/json"`
    Security UpdateNsxvManagerSecurity 
    
}

type UpdateNsxvManagerResponse struct {
    ContentType string 
    NsxvManagerDataSource *shared.NsxvManagerDataSource 
    StatusCode int64 
    
}

