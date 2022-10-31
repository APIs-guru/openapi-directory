package operations

import (
"openapi/pkg/models/shared")

type SuggestVideoCategoryPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type SuggestVideoCategoryRequestBody struct {
    Category []string `json:"category"`
    
}

type SuggestVideoCategorySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type SuggestVideoCategoryRequest struct {
    PathParams SuggestVideoCategoryPathParams 
    Request SuggestVideoCategoryRequestBody `request:"mediaType=application/vnd.vimeo.category+json"`
    Security SuggestVideoCategorySecurity 
    
}

type SuggestVideoCategoryResponse struct {
    ContentType string 
    StatusCode int64 
    Category *shared.Category 
    LegacyError *shared.LegacyError 
    
}

