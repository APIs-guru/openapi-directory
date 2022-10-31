package operations

import (
"openapi/pkg/models/shared")

type AddVideoCreditAlt1PathParams struct {
    ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type AddVideoCreditAlt1RequestBody struct {
    Email string `json:"email"`
    Name string `json:"name"`
    Role string `json:"role"`
    UserURI string `json:"user_uri"`
    
}

type AddVideoCreditAlt1Request struct {
    PathParams AddVideoCreditAlt1PathParams 
    Request AddVideoCreditAlt1RequestBody `request:"mediaType=application/vnd.vimeo.credit+json"`
    
}

type AddVideoCreditAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Credit *shared.Credit 
    LegacyError *shared.LegacyError 
    
}

