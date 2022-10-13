package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIDevicesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIDevicesIDRequest struct {
	PathParams GetAPIDevicesIDPathParams
}

type GetAPIDevicesIDResponse struct {
	Body        []byte
	ContentType string
	Device      *shared.Device
	StatusCode  int64
}
