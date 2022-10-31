package operations

import (
"openapi/pkg/models/shared")

type CreateScoreConfigRequest struct {
    Request shared.CreateConfigInput `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type CreateScoreConfigResponse struct {
    ContentType string 
    Error *interface{} 
    ScoreConfigOutput *shared.ScoreConfigOutput 
    StatusCode int64 
    
}

