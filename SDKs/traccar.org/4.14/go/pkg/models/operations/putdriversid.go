package operations

import (
"openapi/pkg/models/shared")

type PutDriversIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutDriversIDRequest struct {
    PathParams PutDriversIDPathParams 
    Request shared.Driver `request:"mediaType=application/json"`
    
}

type PutDriversIDResponse struct {
    ContentType string 
    Driver *shared.Driver 
    StatusCode int64 
    
}

