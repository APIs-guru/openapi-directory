package operations

import (
"openapi/pkg/models/shared")

type GetUsersIDInstitutionsPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetUsersIDInstitutionsRequest struct {
    PathParams GetUsersIDInstitutionsPathParams 
    
}

type GetUsersIDInstitutionsResponse struct {
    ContentType string 
    Error *shared.Error 
    Institutions []shared.Institution 
    StatusCode int64 
    
}

