package operations

import (
"openapi/pkg/models/shared")

type PostMyOrdersSellingOrderIDRefundRequestsPathParams struct {
    OrderID string `pathParam:"style=simple,explode=false,name=order_id"`
    
}

type PostMyOrdersSellingOrderIDRefundRequestsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostMyOrdersSellingOrderIDRefundRequestsRequest struct {
    PathParams PostMyOrdersSellingOrderIDRefundRequestsPathParams 
    Security PostMyOrdersSellingOrderIDRefundRequestsSecurity 
    
}

type PostMyOrdersSellingOrderIDRefundRequestsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

