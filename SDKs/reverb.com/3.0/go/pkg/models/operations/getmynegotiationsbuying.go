package operations

import (
"openapi/pkg/models/shared")

type GetMyNegotiationsBuyingQueryParams struct {
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetMyNegotiationsBuyingSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyNegotiationsBuyingRequest struct {
    QueryParams GetMyNegotiationsBuyingQueryParams 
    Security GetMyNegotiationsBuyingSecurity 
    
}

type GetMyNegotiationsBuyingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

