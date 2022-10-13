package operations

import (
	"openapi/pkg/models/shared"
)

type CustomDeviceGetResponse struct {
	Body                []byte
	ContentType         string
	CustomDeviceToPosts []shared.CustomDeviceToPost
	StatusCode          int64
}
