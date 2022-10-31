package operations

import (
"openapi/pkg/models/shared")

type GetPortfolioVideoAlt1PathParams struct {
    PortfolioID float64 `pathParam:"style=simple,explode=false,name=portfolio_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetPortfolioVideoAlt1Request struct {
    PathParams GetPortfolioVideoAlt1PathParams 
    
}

type GetPortfolioVideoAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Video *shared.Video 
    
}

