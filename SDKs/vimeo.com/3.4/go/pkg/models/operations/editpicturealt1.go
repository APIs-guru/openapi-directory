package operations

import (
"openapi/pkg/models/shared")

type EditPictureAlt1PathParams struct {
    PortraitsetID float64 `pathParam:"style=simple,explode=false,name=portraitset_id"`
    
}

type EditPictureAlt1RequestBody struct {
    Active *bool `json:"active,omitempty"`
    
}

type EditPictureAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type EditPictureAlt1Request struct {
    PathParams EditPictureAlt1PathParams 
    Request *EditPictureAlt1RequestBody `request:"mediaType=application/vnd.vimeo.picture+json"`
    Security EditPictureAlt1Security 
    
}

type EditPictureAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Picture *shared.Picture 
    
}

