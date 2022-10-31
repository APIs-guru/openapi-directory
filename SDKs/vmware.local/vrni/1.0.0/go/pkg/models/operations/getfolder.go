package operations

import (
"openapi/pkg/models/shared")

type GetFolderPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetFolderQueryParams struct {
    Time *int64 `queryParam:"style=form,explode=true,name=time"`
    
}

type GetFolderSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetFolderRequest struct {
    PathParams GetFolderPathParams 
    QueryParams GetFolderQueryParams 
    Security GetFolderSecurity 
    
}

type GetFolderResponse struct {
    APIError *shared.APIError 
    ContentType string 
    Folder *shared.Folder 
    StatusCode int64 
    
}

