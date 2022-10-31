package operations

import (
"openapi/pkg/models/shared")

type GetLeaveApplicationsQueryParams struct {
    Order *string `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Where *string `queryParam:"style=form,explode=true,name=where"`
    
}

type GetLeaveApplicationsHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
    
}

type GetLeaveApplicationsSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetLeaveApplicationsRequest struct {
    QueryParams GetLeaveApplicationsQueryParams 
    Headers GetLeaveApplicationsHeaders 
    Security GetLeaveApplicationsSecurity 
    
}

type GetLeaveApplicationsResponse struct {
    APIException *shared.APIException 
    ContentType string 
    LeaveApplications *shared.LeaveApplications 
    StatusCode int64 
    
}

