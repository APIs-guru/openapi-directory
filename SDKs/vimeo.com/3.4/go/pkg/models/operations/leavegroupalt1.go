package operations

import (
"openapi/pkg/models/shared")

type LeaveGroupAlt1PathParams struct {
    GroupID float64 `pathParam:"style=simple,explode=false,name=group_id"`
    
}

type LeaveGroupAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type LeaveGroupAlt1Request struct {
    PathParams LeaveGroupAlt1PathParams 
    Security LeaveGroupAlt1Security 
    
}

type LeaveGroupAlt1Response struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

