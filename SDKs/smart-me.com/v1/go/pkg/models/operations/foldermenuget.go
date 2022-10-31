package operations

import (
"openapi/pkg/models/shared")

type FolderMenuGetQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    
}

type FolderMenuGetRequest struct {
    QueryParams FolderMenuGetQueryParams 
    
}

type FolderMenuGetResponse struct {
    Body []byte 
    ContentType string 
    FolderMenuConfiguration *shared.FolderMenuConfiguration 
    StatusCode int64 
    
}

