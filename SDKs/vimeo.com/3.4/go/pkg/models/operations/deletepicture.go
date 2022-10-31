package operations

import (
"openapi/pkg/models/shared")

type DeletePicturePathParams struct {
    PortraitsetID float64 `pathParam:"style=simple,explode=false,name=portraitset_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type DeletePictureSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeletePictureRequest struct {
    PathParams DeletePicturePathParams 
    Security DeletePictureSecurity 
    
}

type DeletePictureResponse struct {
    ContentType string 
    StatusCode int64 
    
}

