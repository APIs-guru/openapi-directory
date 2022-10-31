package operations

import (
"openapi/pkg/models/shared")

type AccountResponse struct {
    Account *shared.Account 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

