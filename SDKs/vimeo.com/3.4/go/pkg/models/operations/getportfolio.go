package operations

import (
"openapi/pkg/models/shared")

type GetPortfolioPathParams struct {
    PortfolioID float64 `pathParam:"style=simple,explode=false,name=portfolio_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetPortfolioRequest struct {
    PathParams GetPortfolioPathParams 
    
}

type GetPortfolioResponse struct {
    ContentType string 
    StatusCode int64 
    Portfolio *shared.Portfolio 
    
}

