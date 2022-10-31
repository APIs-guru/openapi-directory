package operations

import (
"openapi/pkg/models/shared")

type CompleteStreamingUploadPathParams struct {
    Upload float64 `pathParam:"style=simple,explode=false,name=upload"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type CompleteStreamingUploadQueryParams struct {
    Signature string `queryParam:"style=form,explode=true,name=signature"`
    VideoFileID float64 `queryParam:"style=form,explode=true,name=video_file_id"`
    
}

type CompleteStreamingUploadSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CompleteStreamingUploadRequest struct {
    PathParams CompleteStreamingUploadPathParams 
    QueryParams CompleteStreamingUploadQueryParams 
    Security CompleteStreamingUploadSecurity 
    
}

type CompleteStreamingUploadResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    
}

