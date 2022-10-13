package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPITextHumanizeHeaders struct {
	XAPIKey *string `header:"name=X-Api-Key"`
}

type PostAPITextHumanizeRequests struct {
	TextDto  *shared.TextDto `request:"mediaType=application/*+json"`
	TextDto1 *shared.TextDto `request:"mediaType=application/json"`
	TextDto2 *shared.TextDto `request:"mediaType=application/json-patch+json"`
	TextDto3 *shared.TextDto `request:"mediaType=text/json"`
}

type PostAPITextHumanizeRequest struct {
	Headers PostAPITextHumanizeHeaders
	Request PostAPITextHumanizeRequests
}

type PostAPITextHumanizeResponse struct {
	ContentType string
	StatusCode  int64
}
