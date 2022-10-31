package operations

import (
"openapi/pkg/models/shared")

type PutEmployerTagPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    TagID string `pathParam:"style=simple,explode=false,name=TagId"`
    
}

type PutEmployerTagHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PutEmployerTagRequest struct {
    PathParams PutEmployerTagPathParams 
    Headers PutEmployerTagHeaders 
    
}

type PutEmployerTagResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Tag *shared.Tag 
    
}

