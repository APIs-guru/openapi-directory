package operations

import (
"openapi/pkg/models/shared")

type GetAPINameQueryParams struct {
    NameType shared.NameTypeEnum `queryParam:"style=form,explode=true,name=nameType"`
    Quantity int32 `queryParam:"style=form,explode=true,name=quantity"`
    
}

type GetAPINameHeaders struct {
    XAPIKey *string `header:"style=simple,explode=false,name=X-Api-Key"`
    
}

type GetAPINameRequest struct {
    QueryParams GetAPINameQueryParams 
    Headers GetAPINameHeaders 
    
}

type GetAPINameResponse struct {
    ContentType string 
    StatusCode int64 
    
}

