package operations

import (
"openapi/pkg/models/shared")

type GetAPIMembersIDVotingPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPIMembersIDVotingQueryParams struct {
    House int32 `queryParam:"style=form,explode=true,name=house"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    
}

type GetAPIMembersIDVotingRequest struct {
    PathParams GetAPIMembersIDVotingPathParams 
    QueryParams GetAPIMembersIDVotingQueryParams 
    
}

type GetAPIMembersIDVotingResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    VoteMembersServiceSearchResult *shared.VoteMembersServiceSearchResult 
    
}

