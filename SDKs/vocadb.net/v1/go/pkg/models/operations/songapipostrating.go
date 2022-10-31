package operations

import (
"openapi/pkg/models/shared")

type SongAPIPostRatingPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type SongAPIPostRatingRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    SongRatingContract *shared.SongRatingContract `request:"mediaType=application/json"`
    SongRatingContract1 *shared.SongRatingContract `request:"mediaType=application/x-www-form-urlencoded"`
    SongRatingContract2 *shared.SongRatingContract `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type SongAPIPostRatingRequest struct {
    PathParams SongAPIPostRatingPathParams 
    Request SongAPIPostRatingRequests 
    
}

type SongAPIPostRatingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

