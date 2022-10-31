package operations

import (
"openapi/pkg/models/shared")

type PostMyOrdersSellingIDShipPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostMyOrdersSellingIDShipRequestBody struct {
    Provider string `json:"provider"`
    SendNotification bool `json:"send_notification"`
    TrackingNumber string `json:"tracking_number"`
    
}

type PostMyOrdersSellingIDShipSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostMyOrdersSellingIDShipRequest struct {
    PathParams PostMyOrdersSellingIDShipPathParams 
    Request *PostMyOrdersSellingIDShipRequestBody `request:"mediaType=application/json"`
    Security PostMyOrdersSellingIDShipSecurity 
    
}

type PostMyOrdersSellingIDShipResponse struct {
    ContentType string 
    StatusCode int64 
    
}

