package operations

import (
	"openapi/pkg/models/shared"
)

type SendFeedbackRequestBody struct {
	JSON *shared.Feedback `form:"name=json,json"`
}

type SendFeedbackRequest struct {
	Request SendFeedbackRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type SendFeedbackResponse struct {
	ContentType   string
	SeldonMessage *shared.SeldonMessage
	StatusCode    int64
}
