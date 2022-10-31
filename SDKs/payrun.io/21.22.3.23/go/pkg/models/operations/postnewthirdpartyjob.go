package operations

import (
	"openapi/pkg/models/shared"
)

type PostNewThirdPartyJobHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostNewThirdPartyJobRequest struct {
	Headers PostNewThirdPartyJobHeaders
	Request shared.ThirdPartyJobInstruction `request:"mediaType=application/json"`
}

type PostNewThirdPartyJobResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
