package operations

import (
"openapi/pkg/models/shared")

type PayOrderPathParams struct {
    OrderID string `pathParam:"style=simple,explode=false,name=order_id"`
    
}

type PayOrderSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PayOrderRequest struct {
    PathParams PayOrderPathParams 
    Request shared.PayOrderRequest `request:"mediaType=application/json"`
    Security PayOrderSecurity 
    
}

type PayOrderResponse struct {
    ContentType string 
    PayOrderResponse *shared.PayOrderResponse 
    StatusCode int64 
    
}

