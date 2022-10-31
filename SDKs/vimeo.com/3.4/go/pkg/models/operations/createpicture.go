package operations

import (
"openapi/pkg/models/shared")

type CreatePicturePathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type CreatePictureSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreatePictureRequest struct {
    PathParams CreatePicturePathParams 
    Security CreatePictureSecurity 
    
}

type CreatePictureResponse struct {
    ContentType string 
    StatusCode int64 
    Picture *shared.Picture 
    
}

