package operations

import (
	"openapi/pkg/models/shared"
)

type PostDevicesRequest struct {
	Request shared.Device `request:"mediaType=application/json"`
}

type PostDevicesResponse struct {
	ContentType string
	Device      *shared.Device
	StatusCode  int64
}
