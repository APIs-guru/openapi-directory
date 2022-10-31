package operations

import (
"openapi/pkg/models/shared")

type TestGetResponse struct {
    ContentType string 
    StatusCode int64 
    TestDto *shared.TestDto 
    
}

