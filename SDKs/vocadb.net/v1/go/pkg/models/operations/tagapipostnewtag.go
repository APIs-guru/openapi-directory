package operations

import (
"openapi/pkg/models/shared")

type TagAPIPostNewTagQueryParams struct {
    Name string `queryParam:"style=form,explode=true,name=name"`
    
}

type TagAPIPostNewTagRequest struct {
    QueryParams TagAPIPostNewTagQueryParams 
    
}

type TagAPIPostNewTagResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TagBaseContract *shared.TagBaseContract 
    
}

