package operations

import (
"openapi/pkg/models/shared")

type GetCommentsPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}


type GetCommentsDirectionEnum string

const (
    GetCommentsDirectionEnumAsc GetCommentsDirectionEnum = "asc"
GetCommentsDirectionEnumDesc GetCommentsDirectionEnum = "desc"
)


type GetCommentsQueryParams struct {
    Direction *GetCommentsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetCommentsRequest struct {
    PathParams GetCommentsPathParams 
    QueryParams GetCommentsQueryParams 
    
}

type GetCommentsResponse struct {
    ContentType string 
    StatusCode int64 
    Comments []shared.Comment 
    
}

