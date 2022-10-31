package operations

import (
"openapi/pkg/models/shared")

type FolderGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type FolderGetRequest struct {
    PathParams FolderGetPathParams 
    
}

type FolderGetResponse struct {
    ContentType string 
    FolderData *shared.FolderData 
    StatusCode int64 
    
}

