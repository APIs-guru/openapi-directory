package operations

import (
"openapi/pkg/models/shared")

type RetrieveInventoryAdjustmentPathParams struct {
    AdjustmentID string `pathParam:"style=simple,explode=false,name=adjustment_id"`
    
}

type RetrieveInventoryAdjustmentSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type RetrieveInventoryAdjustmentRequest struct {
    PathParams RetrieveInventoryAdjustmentPathParams 
    Security RetrieveInventoryAdjustmentSecurity 
    
}

type RetrieveInventoryAdjustmentResponse struct {
    ContentType string 
    RetrieveInventoryAdjustmentResponse *shared.RetrieveInventoryAdjustmentResponse 
    StatusCode int64 
    
}

