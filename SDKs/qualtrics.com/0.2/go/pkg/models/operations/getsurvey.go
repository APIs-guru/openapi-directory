package operations



type GetSurveyPathParams struct {
    SurveyID string `pathParam:"style=simple,explode=false,name=SurveyId"`
    
}

type GetSurveyRequest struct {
    PathParams GetSurveyPathParams 
    
}

type GetSurveyResponse struct {
    ContentType string 
    StatusCode int64 
    SurveyResponse map[string]interface{} 
    
}

