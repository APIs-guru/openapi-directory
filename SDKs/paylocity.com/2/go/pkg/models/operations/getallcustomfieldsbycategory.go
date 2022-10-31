package operations

import (
"openapi/pkg/models/shared")

type GetAllCustomFieldsByCategoryPathParams struct {
    Category string `pathParam:"style=simple,explode=false,name=category"`
    CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
    
}

type GetAllCustomFieldsByCategorySecurity struct {
    PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
    
}

type GetAllCustomFieldsByCategoryRequest struct {
    PathParams GetAllCustomFieldsByCategoryPathParams 
    Security GetAllCustomFieldsByCategorySecurity 
    
}

type GetAllCustomFieldsByCategoryResponse struct {
    ContentType string 
    StatusCode int64 
    CustomFieldDefinitions []shared.CustomFieldDefinition 
    Errors []shared.Error 
    
}

