package operations

import (
"openapi/pkg/models/shared")

type AddNewEmployeeToWebLinkPathParams struct {
    CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
    
}

type AddNewEmployeeToWebLinkSecurity struct {
    PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
    
}

type AddNewEmployeeToWebLinkRequest struct {
    PathParams AddNewEmployeeToWebLinkPathParams 
    Request shared.StagedEmployee `request:"mediaType=application/json"`
    Security AddNewEmployeeToWebLinkSecurity 
    
}

type AddNewEmployeeToWebLinkResponse struct {
    ContentType string 
    StatusCode int64 
    Errors []shared.Error 
    TrackingNumberResponses []shared.TrackingNumberResponse 
    
}

