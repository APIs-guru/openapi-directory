package operations

import (
"openapi/pkg/models/shared")

type DeleteCommentPathParams struct {
    CommentID float64 `pathParam:"style=simple,explode=false,name=comment_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type DeleteCommentSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteCommentRequest struct {
    PathParams DeleteCommentPathParams 
    Security DeleteCommentSecurity 
    
}

type DeleteCommentResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    LegacyError *shared.LegacyError 
    
}

