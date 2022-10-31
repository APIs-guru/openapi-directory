package operations

import (
	"openapi/pkg/models/shared"
)

type PredictMultipartRequests struct {
	ImageClassificationRequest  *shared.ImageClassificationRequest `request:"mediaType=application/json"`
	ImageClassificationRequest1 *shared.ImageClassificationRequest `request:"mediaType=multipart/form-data"`
}

type PredictMultipartSecurity struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type PredictMultipartRequest struct {
	Request  *PredictMultipartRequests
	Security PredictMultipartSecurity
}

type PredictMultipartResponse struct {
	ContentType                 string
	ImageClassificationResponse *shared.ImageClassificationResponse
	StatusCode                  int64
}
