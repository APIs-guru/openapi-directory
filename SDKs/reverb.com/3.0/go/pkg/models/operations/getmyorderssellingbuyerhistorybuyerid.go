package operations

import (
"openapi/pkg/models/shared")

type GetMyOrdersSellingBuyerHistoryBuyerIDPathParams struct {
    BuyerID string `pathParam:"style=simple,explode=false,name=buyer_id"`
    
}

type GetMyOrdersSellingBuyerHistoryBuyerIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyOrdersSellingBuyerHistoryBuyerIDRequest struct {
    PathParams GetMyOrdersSellingBuyerHistoryBuyerIDPathParams 
    Security GetMyOrdersSellingBuyerHistoryBuyerIDSecurity 
    
}

type GetMyOrdersSellingBuyerHistoryBuyerIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

