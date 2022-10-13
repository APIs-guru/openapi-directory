package operations

import (
	"openapi/pkg/models/shared"
)

type PicoChargingHistoryGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PicoChargingHistoryGetRequest struct {
	PathParams PicoChargingHistoryGetPathParams
}

type PicoChargingHistoryGetResponse struct {
	Body                    []byte
	ContentType             string
	PicoChargingHistoryData []shared.PicoChargingHistoryData
	StatusCode              int64
}
