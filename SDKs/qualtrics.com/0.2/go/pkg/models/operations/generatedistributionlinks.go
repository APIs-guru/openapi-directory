package operations

import (
"openapi/pkg/models/shared")

type GenerateDistributionLinksRequest struct {
    Request shared.CreateDistributionLinks `request:"mediaType=application/json"`
    
}

type GenerateDistributionLinksResponse struct {
    ContentType string 
    StatusCode int64 
    
}

