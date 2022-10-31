package operations

import (
"openapi/pkg/models/shared")

type GetCurrentUserResponse struct {
    ContentType string 
    CurrentUser *shared.CurrentUser 
    StatusCode int64 
    
}

