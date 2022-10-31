package operations

import (
"openapi/pkg/models/shared")

type DepositSwitchGetRequest struct {
    Request shared.DepositSwitchGetRequest `request:"mediaType=application/json"`
    
}

type DepositSwitchGetResponse struct {
    ContentType string 
    DepositSwitchGetResponse map[string]interface{} 
    StatusCode int64 
    
}

