package operations

import (
"openapi/pkg/models/shared")

type DeletePictureAlt1PathParams struct {
    PortraitsetID float64 `pathParam:"style=simple,explode=false,name=portraitset_id"`
    
}

type DeletePictureAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeletePictureAlt1Request struct {
    PathParams DeletePictureAlt1PathParams 
    Security DeletePictureAlt1Security 
    
}

type DeletePictureAlt1Response struct {
    ContentType string 
    StatusCode int64 
    
}

