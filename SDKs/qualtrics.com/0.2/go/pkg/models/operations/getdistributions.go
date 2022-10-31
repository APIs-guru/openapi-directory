package operations

import (
"openapi/pkg/models/shared")

type GetDistributionsQueryParams struct {
    SurveyID string `queryParam:"style=form,explode=true,name=surveyId"`
    
}

type GetDistributionsRequest struct {
    QueryParams GetDistributionsQueryParams 
    
}

type GetDistributionsResponse struct {
    ContentType string 
    DistributionsResponse *shared.DistributionsResponse 
    StatusCode int64 
    
}

