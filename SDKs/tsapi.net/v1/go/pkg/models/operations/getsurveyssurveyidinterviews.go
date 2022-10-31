package operations

import (
	"openapi/pkg/models/shared"
)

type GetSurveysSurveyIDInterviewsPathParams struct {
	SurveyID string `pathParam:"style=simple,explode=false,name=surveyId"`
}

type GetSurveysSurveyIDInterviewsQueryParams struct {
	MaxLength *int32 `queryParam:"style=form,explode=true,name=maxLength"`
	Start     *int32 `queryParam:"style=form,explode=true,name=start"`
}

type GetSurveysSurveyIDInterviewsRequest struct {
	PathParams  GetSurveysSurveyIDInterviewsPathParams
	QueryParams GetSurveysSurveyIDInterviewsQueryParams
}

type GetSurveysSurveyIDInterviewsResponse struct {
	Body        []byte
	ContentType string
	Interviews  []shared.Interview
	StatusCode  int64
}
