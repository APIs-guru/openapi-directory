package operations

import (
"openapi/pkg/models/shared")

type GetVideoCreditPathParams struct {
    CreditID float64 `pathParam:"style=simple,explode=false,name=credit_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetVideoCreditRequest struct {
    PathParams GetVideoCreditPathParams 
    
}

type GetVideoCreditResponse struct {
    ContentType string 
    StatusCode int64 
    Credit *shared.Credit 
    LegacyError *shared.LegacyError 
    
}

