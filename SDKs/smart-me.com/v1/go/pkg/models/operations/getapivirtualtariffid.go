package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIVirtualTariffIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIVirtualTariffIDRequest struct {
	PathParams GetAPIVirtualTariffIDPathParams
}

type GetAPIVirtualTariffIDResponse struct {
	Body                   []byte
	ContentType            string
	StatusCode             int64
	VirtualTariffsOfFolder *shared.VirtualTariffsOfFolder
}
