package operations

import (
	"openapi/pkg/models/shared"
)

type PutDevicesIDAccumulatorsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutDevicesIDAccumulatorsRequest struct {
	PathParams PutDevicesIDAccumulatorsPathParams
	Request    shared.DeviceAccumulators `request:"mediaType=application/json"`
}

type PutDevicesIDAccumulatorsResponse struct {
	ContentType string
	StatusCode  int64
}
