package operations

import (
	"openapi/pkg/models/shared"
)

type SubmitUserFeedbackPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type SubmitUserFeedbackRequestBody struct {
	Category *string `multipartForm:"name=category"`
	Content  *string `multipartForm:"name=content"`
	Positive int64   `multipartForm:"name=positive"`
}

type SubmitUserFeedback200ApplicationJSON struct {
	Feedback *shared.Feedback `json:"feedback,omitempty"`
	User     *shared.User     `json:"user,omitempty"`
}

type SubmitUserFeedbackRequest struct {
	PathParams SubmitUserFeedbackPathParams
	Request    SubmitUserFeedbackRequestBody `request:"mediaType=multipart/form-data"`
}

type SubmitUserFeedbackResponse struct {
	ContentType                                string
	StatusCode                                 int64
	SubmitUserFeedback200ApplicationJSONObject *SubmitUserFeedback200ApplicationJSON
}
