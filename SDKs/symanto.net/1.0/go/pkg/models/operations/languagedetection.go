package operations

import (
"openapi/pkg/models/shared")

type LanguageDetectionRequest struct {
    Request []shared.LanguageDetection `request:"mediaType=application/json"`
    
}

type LanguageDetectionResponse struct {
    ContentType string 
    LanguageDetectionResponse []shared.LanguagePredicted 
    StatusCode int64 
    ValidationErrors *shared.ValidationErrors 
    
}

