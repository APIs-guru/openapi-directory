package operations

import (
"openapi/pkg/models/shared")

type GetListingsSlugEditPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type GetListingsSlugEditSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetListingsSlugEditRequest struct {
    PathParams GetListingsSlugEditPathParams 
    Security GetListingsSlugEditSecurity 
    
}

type GetListingsSlugEditResponse struct {
    ContentType string 
    StatusCode int64 
    
}

