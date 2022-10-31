package operations

import (
"openapi/pkg/models/shared")

type DeleteVideoFromPortfolioPathParams struct {
    PortfolioID float64 `pathParam:"style=simple,explode=false,name=portfolio_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type DeleteVideoFromPortfolioSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeleteVideoFromPortfolioRequest struct {
    PathParams DeleteVideoFromPortfolioPathParams 
    Security DeleteVideoFromPortfolioSecurity 
    
}

type DeleteVideoFromPortfolioResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

