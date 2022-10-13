package operations

import (
	"openapi/pkg/models/shared"
)

type PutDevicesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutDevicesIDRequest struct {
	PathParams PutDevicesIDPathParams
	Request    shared.Device `request:"mediaType=application/json"`
}

type PutDevicesIDResponse struct {
	ContentType string
	Device      *shared.Device
	StatusCode  int64
}
