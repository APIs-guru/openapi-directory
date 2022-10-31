package operations

import (
"openapi/pkg/models/shared")

type GetV2OrdersOrderIDPathParams struct {
    OrderID string `pathParam:"style=simple,explode=false,name=order_id"`
    
}

type GetV2OrdersOrderIDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetV2OrdersOrderIDRequest struct {
    PathParams GetV2OrdersOrderIDPathParams 
    Security GetV2OrdersOrderIDSecurity 
    
}

type GetV2OrdersOrderIDResponse struct {
    ContentType string 
    RetrieveOrderResponse *shared.RetrieveOrderResponse 
    StatusCode int64 
    
}

