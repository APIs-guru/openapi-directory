package operations

import (
	"openapi/pkg/models/shared"
)

type VirtualBillingMeterActiveGetResponse struct {
	Body        []byte
	ContentType string
	Devices     []shared.Device
	StatusCode  int64
}
