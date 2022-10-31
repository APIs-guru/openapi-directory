package operations

import (
"openapi/pkg/models/shared")

type GetAPILocationConstituencyIDElectionResultsPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPILocationConstituencyIDElectionResultsRequest struct {
    PathParams GetAPILocationConstituencyIDElectionResultsPathParams 
    
}

type GetAPILocationConstituencyIDElectionResultsResponse struct {
    Body []byte 
    ContentType string 
    ElectionResultListItem *shared.ElectionResultListItem 
    StatusCode int64 
    
}

