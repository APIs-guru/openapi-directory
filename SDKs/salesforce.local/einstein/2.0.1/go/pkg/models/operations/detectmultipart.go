package operations

import (
	"openapi/pkg/models/shared"
)

type DetectMultipartRequests struct {
	ObjectDetectionRequest  *shared.ObjectDetectionRequest `request:"mediaType=application/json"`
	ObjectDetectionRequest1 *shared.ObjectDetectionRequest `request:"mediaType=multipart/form-data"`
}

type DetectMultipartSecurity struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type DetectMultipartRequest struct {
	Request  *DetectMultipartRequests
	Security DetectMultipartSecurity
}

type DetectMultipartResponse struct {
	ContentType             string
	ObjectDetectionResponse *shared.ObjectDetectionResponse
	StatusCode              int64
}
