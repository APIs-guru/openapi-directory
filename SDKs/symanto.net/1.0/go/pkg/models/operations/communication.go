package operations

import (
	"openapi/pkg/models/shared"
)

type CommunicationQueryParams struct {
	All *bool `queryParam:"style=form,explode=true,name=all"`
}

type CommunicationRequest struct {
	QueryParams CommunicationQueryParams
	Request     []shared.Post `request:"mediaType=application/json"`
}

type CommunicationResponse struct {
	ContentType       string
	PredictionResults []shared.PostPredicted
	StatusCode        int64
	ValidationErrors  *shared.ValidationErrors
}
