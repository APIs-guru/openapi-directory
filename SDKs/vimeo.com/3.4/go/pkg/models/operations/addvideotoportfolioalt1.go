package operations

import (
"openapi/pkg/models/shared")

type AddVideoToPortfolioAlt1PathParams struct {
    PortfolioID float64 `pathParam:"style=simple,explode=false,name=portfolio_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type AddVideoToPortfolioAlt1Security struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type AddVideoToPortfolioAlt1Request struct {
    PathParams AddVideoToPortfolioAlt1PathParams 
    Security AddVideoToPortfolioAlt1Security 
    
}

type AddVideoToPortfolioAlt1Response struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

