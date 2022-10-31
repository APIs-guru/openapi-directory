package operations

import (
"openapi/pkg/models/shared")

type UpdateOrderPathParams struct {
    LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
    OrderID string `pathParam:"style=simple,explode=false,name=order_id"`
    
}

type UpdateOrderSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type UpdateOrderRequest struct {
    PathParams UpdateOrderPathParams 
    Request shared.V1UpdateOrderRequest `request:"mediaType=application/json"`
    Security UpdateOrderSecurity 
    
}

type UpdateOrderResponse struct {
    ContentType string 
    StatusCode int64 
    V1Order *shared.V1Order 
    
}

