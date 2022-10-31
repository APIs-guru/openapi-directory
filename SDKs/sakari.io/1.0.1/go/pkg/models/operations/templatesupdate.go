package operations

import (
"openapi/pkg/models/shared")

type TemplatesUpdatePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    TemplateID string `pathParam:"style=simple,explode=false,name=templateId"`
    
}

type TemplatesUpdateSecurity struct {
    SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
    
}

type TemplatesUpdateRequest struct {
    PathParams TemplatesUpdatePathParams 
    Security TemplatesUpdateSecurity 
    
}

type TemplatesUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    TemplateResponse *shared.TemplateResponse 
    
}

