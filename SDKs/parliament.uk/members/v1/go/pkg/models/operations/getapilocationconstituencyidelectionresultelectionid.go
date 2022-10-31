package operations

import (
"openapi/pkg/models/shared")

type GetAPILocationConstituencyIDElectionResultElectionIDPathParams struct {
    ElectionID int32 `pathParam:"style=simple,explode=false,name=electionId"`
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPILocationConstituencyIDElectionResultElectionIDRequest struct {
    PathParams GetAPILocationConstituencyIDElectionResultElectionIDPathParams 
    
}

type GetAPILocationConstituencyIDElectionResultElectionIDResponse struct {
    Body []byte 
    ContentType string 
    ElectionResultItem *shared.ElectionResultItem 
    StatusCode int64 
    
}

