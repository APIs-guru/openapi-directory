package operations

import (
"openapi/pkg/models/shared")

type PostListingsIDOfferPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostListingsIDOfferRequestBody struct {
    Message *string `json:"message,omitempty"`
    Price string `json:"price"`
    ShippingPrice *string `json:"shipping_price,omitempty"`
    
}

type PostListingsIDOfferSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostListingsIDOfferRequest struct {
    PathParams PostListingsIDOfferPathParams 
    Request *PostListingsIDOfferRequestBody `request:"mediaType=application/json"`
    Security PostListingsIDOfferSecurity 
    
}

type PostListingsIDOfferResponse struct {
    ContentType string 
    StatusCode int64 
    
}

