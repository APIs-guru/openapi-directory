package operations

import (
"openapi/pkg/models/shared")

type DeletesystemPathParams struct {
    InventoryID string `pathParam:"style=simple,explode=false,name=inventory_id"`
    
}

type DeletesystemSecurity struct {
    RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeletesystemRequest struct {
    PathParams DeletesystemPathParams 
    Security DeletesystemSecurity 
    
}

type DeletesystemResponse struct {
    ContentType string 
    StatusCode int64 
    
}

