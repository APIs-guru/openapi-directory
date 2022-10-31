package operations

import (
"openapi/pkg/models/shared")

type CreateCommentPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type CreateCommentRequestBody struct {
    Text string `json:"text"`
    
}

type CreateCommentSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateCommentRequest struct {
    PathParams CreateCommentPathParams 
    Request CreateCommentRequestBody `request:"mediaType=application/vnd.vimeo.comment+json"`
    Security CreateCommentSecurity 
    
}

type CreateCommentResponse struct {
    ContentType string 
    StatusCode int64 
    Comment *shared.Comment 
    Error *shared.Error 
    
}

