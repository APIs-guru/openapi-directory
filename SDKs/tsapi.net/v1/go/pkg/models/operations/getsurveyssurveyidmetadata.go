package operations

import (
"openapi/pkg/models/shared")

type GetSurveysSurveyIDMetadataPathParams struct {
    SurveyID string `pathParam:"style=simple,explode=false,name=surveyId"`
    
}

type GetSurveysSurveyIDMetadataRequest struct {
    PathParams GetSurveysSurveyIDMetadataPathParams 
    
}

type GetSurveysSurveyIDMetadataResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    SurveyMetadata *shared.SurveyMetadata 
    
}

