package operations

import (
	"openapi/pkg/models/shared"
)

type SubmitAnswersPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
}

type SubmitAnswersRequest struct {
	PathParams SubmitAnswersPathParams
	Request    map[string]string `request:"mediaType=application/json"`
}

type SubmitAnswersResponse struct {
	ContentType string
	Group       *shared.Group
	StatusCode  int64
}
