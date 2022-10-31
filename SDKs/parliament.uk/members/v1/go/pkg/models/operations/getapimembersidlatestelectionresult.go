package operations

import (
"openapi/pkg/models/shared")

type GetAPIMembersIDLatestElectionResultPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPIMembersIDLatestElectionResultRequest struct {
    PathParams GetAPIMembersIDLatestElectionResultPathParams 
    
}

type GetAPIMembersIDLatestElectionResultResponse struct {
    Body []byte 
    ContentType string 
    ElectionResultItem *shared.ElectionResultItem 
    StatusCode int64 
    
}

