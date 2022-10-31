package operations

import (
"openapi/pkg/models/shared")

type DetailSystemPathParams struct {
    InventoryID string `pathParam:"style=simple,explode=false,name=inventory_id"`
    
}

type DetailSystemSecurity struct {
    RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
    
}

type DetailSystemRequest struct {
    PathParams DetailSystemPathParams 
    Security DetailSystemSecurity 
    
}

type DetailSystemResponse struct {
    ContentType string 
    StatusCode int64 
    ControllersSystemDetailResponse *shared.ControllersSystemDetailResponse 
    
}

