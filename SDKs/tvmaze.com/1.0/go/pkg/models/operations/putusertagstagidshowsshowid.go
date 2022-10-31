package operations

import (
"openapi/pkg/models/shared")

type PutUserTagsTagIDShowsShowIDPathParams struct {
    ShowID int64 `pathParam:"style=simple,explode=false,name=show_id"`
    TagID int64 `pathParam:"style=simple,explode=false,name=tag_id"`
    
}

type PutUserTagsTagIDShowsShowIDRequest struct {
    PathParams PutUserTagsTagIDShowsShowIDPathParams 
    
}

type PutUserTagsTagIDShowsShowIDResponse struct {
    ContentType string 
    StatusCode int64 
    TagInstance *shared.TagInstance 
    
}

