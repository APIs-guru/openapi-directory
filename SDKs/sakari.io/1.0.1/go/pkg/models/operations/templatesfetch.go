package operations

import (
"openapi/pkg/models/shared")

type TemplatesFetchPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    TemplateID string `pathParam:"style=simple,explode=false,name=templateId"`
    
}

type TemplatesFetchSecurity struct {
    SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
    
}

type TemplatesFetchRequest struct {
    PathParams TemplatesFetchPathParams 
    Security TemplatesFetchSecurity 
    
}

type TemplatesFetchResponse struct {
    ContentType string 
    StatusCode int64 
    TemplateResponse *shared.TemplateResponse 
    
}

