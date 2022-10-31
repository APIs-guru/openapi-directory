package operations

import (
"openapi/pkg/models/shared")

type SentimentMultipartRequests struct {
    SentimentPredictRequest *shared.SentimentPredictRequest `request:"mediaType=application/json"`
    SentimentPredictRequest1 *shared.SentimentPredictRequest `request:"mediaType=multipart/form-data"`
    
}

type SentimentMultipartSecurity struct {
    BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
    
}

type SentimentMultipartRequest struct {
    Request *SentimentMultipartRequests 
    Security SentimentMultipartSecurity 
    
}

type SentimentMultipartResponse struct {
    ContentType string 
    SentimentPredictResponse *shared.SentimentPredictResponse 
    StatusCode int64 
    
}

