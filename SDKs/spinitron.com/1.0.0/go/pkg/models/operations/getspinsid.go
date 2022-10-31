package operations

import (
"openapi/pkg/models/shared")

type GetSpinsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSpinsIDQueryParams struct {
    Expand []string `queryParam:"style=form,explode=true,name=expand"`
    Fields []string `queryParam:"style=form,explode=true,name=fields"`
    
}

type GetSpinsIDRequest struct {
    PathParams GetSpinsIDPathParams 
    QueryParams GetSpinsIDQueryParams 
    
}

type GetSpinsIDResponse struct {
    Body []byte 
    ContentType string 
    Error *shared.Error 
    Spin *shared.Spin 
    StatusCode int64 
    
}

