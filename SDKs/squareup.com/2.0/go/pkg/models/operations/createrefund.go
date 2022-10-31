package operations

import (
"openapi/pkg/models/shared")

type CreateRefundPathParams struct {
    LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
    
}

type CreateRefundSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateRefundRequest struct {
    PathParams CreateRefundPathParams 
    Request shared.V1CreateRefundRequest `request:"mediaType=application/json"`
    Security CreateRefundSecurity 
    
}

type CreateRefundResponse struct {
    ContentType string 
    StatusCode int64 
    V1Refund *shared.V1Refund 
    
}

