package operations

import (
	"openapi/pkg/models/shared"
)

type GetSurveysResponse struct {
	Body          []byte
	ContentType   string
	StatusCode    int64
	SurveyDetails []shared.SurveyDetail
}
