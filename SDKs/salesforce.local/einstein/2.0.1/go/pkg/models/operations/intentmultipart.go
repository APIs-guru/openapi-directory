package operations

import (
	"openapi/pkg/models/shared"
)

type IntentMultipartRequests struct {
	IntentPredictRequest  *shared.IntentPredictRequest `request:"mediaType=application/json"`
	IntentPredictRequest1 *shared.IntentPredictRequest `request:"mediaType=multipart/form-data"`
}

type IntentMultipartSecurity struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type IntentMultipartRequest struct {
	Request  *IntentMultipartRequests
	Security IntentMultipartSecurity
}

type IntentMultipartResponse struct {
	ContentType             string
	IntentPredictResponse   *shared.IntentPredictResponse
	PredictionErrorResponse *shared.PredictionErrorResponse
	StatusCode              int64
}
