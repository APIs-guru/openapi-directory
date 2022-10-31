package operations

import (
	"openapi/pkg/models/shared"
)

type GetSpecificSentencePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSpecificSentenceRequest struct {
	PathParams GetSpecificSentencePathParams
}

type GetSpecificSentence200ApplicationJSON struct {
	Data *shared.Sentence `json:"data,omitempty"`
}

type GetSpecificSentenceResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetSpecificSentence200ApplicationJSONObject *GetSpecificSentence200ApplicationJSON
}
