package operations

import (
"openapi/pkg/models/shared")

type GetSelectedMultipleQueryParams struct {
    Headers map[string]string `queryParam:"style=form,explode=true,name=headers"`
    Js *bool `queryParam:"style=form,explode=true,name=js"`
    Proxy *shared.ProxyEnum `queryParam:"style=form,explode=true,name=proxy"`
    Selectors []string `queryParam:"style=form,explode=true,name=selectors"`
    Timeout *int64 `queryParam:"style=form,explode=true,name=timeout"`
    URL string `queryParam:"style=form,explode=true,name=url"`
    
}

type GetSelectedMultipleRequest struct {
    QueryParams GetSelectedMultipleQueryParams 
    
}

type GetSelectedMultipleResponse struct {
    ContentType string 
    Error *shared.Error 
    PageError *shared.PageError 
    SelectedAreas []string 
    StatusCode int64 
    
}

