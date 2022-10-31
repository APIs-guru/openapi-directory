package operations

import (
"openapi/pkg/models/shared")

type CreateTimesheetHeaders struct {
    XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
    
}

type CreateTimesheetSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type CreateTimesheetRequest struct {
    Headers CreateTimesheetHeaders 
    Request []shared.Timesheet `request:"mediaType=application/json"`
    Security CreateTimesheetSecurity 
    
}

type CreateTimesheetResponse struct {
    ContentType string 
    StatusCode int64 
    Timesheets *shared.Timesheets 
    
}

