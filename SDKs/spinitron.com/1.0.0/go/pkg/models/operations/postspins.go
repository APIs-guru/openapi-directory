package operations

import (
"time"
"openapi/pkg/models/shared")

type PostSpinsRequestBody struct {
    Artist string `form:"name=artist"`
    Composer *string `form:"name=composer"`
    Duration *int64 `form:"name=duration"`
    Genre *string `form:"name=genre"`
    Isrc *string `form:"name=isrc"`
    Label *string `form:"name=label"`
    Live *bool `form:"name=live"`
    Release *string `form:"name=release"`
    Song string `form:"name=song"`
    Start *time.Time `form:"name=start"`
    
}

type PostSpinsRequest struct {
    Request *PostSpinsRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type PostSpinsResponse struct {
    Body []byte 
    ContentType string 
    Error *shared.Error 
    Spin *shared.Spin 
    StatusCode int64 
    ValidationErrors []shared.ValidationError 
    
}

