package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyOrdersAwaitingFeedbackSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyOrdersAwaitingFeedbackRequest struct {
	Security GetMyOrdersAwaitingFeedbackSecurity
}

type GetMyOrdersAwaitingFeedbackResponse struct {
	ContentType string
	StatusCode  int64
}
