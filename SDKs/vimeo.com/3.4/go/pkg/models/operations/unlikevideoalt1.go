package operations

import (
"openapi/pkg/models/shared")

type UnlikeVideoAlt1PathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type UnlikeVideoAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UnlikeVideoAlt1Request struct {
    PathParams UnlikeVideoAlt1PathParams 
    Security UnlikeVideoAlt1Security 
    
}

type UnlikeVideoAlt1Response struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

