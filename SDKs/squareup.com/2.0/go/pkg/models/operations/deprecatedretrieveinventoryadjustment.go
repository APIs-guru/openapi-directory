package operations

import (
"openapi/pkg/models/shared")

type DeprecatedRetrieveInventoryAdjustmentPathParams struct {
    AdjustmentID string `pathParam:"style=simple,explode=false,name=adjustment_id"`
    
}

type DeprecatedRetrieveInventoryAdjustmentSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type DeprecatedRetrieveInventoryAdjustmentRequest struct {
    PathParams DeprecatedRetrieveInventoryAdjustmentPathParams 
    Security DeprecatedRetrieveInventoryAdjustmentSecurity 
    
}

type DeprecatedRetrieveInventoryAdjustmentResponse struct {
    ContentType string 
    RetrieveInventoryAdjustmentResponse *shared.RetrieveInventoryAdjustmentResponse 
    StatusCode int64 
    
}

