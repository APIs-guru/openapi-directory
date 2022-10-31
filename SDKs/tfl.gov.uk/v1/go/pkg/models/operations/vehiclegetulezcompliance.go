package operations

import (
	"openapi/pkg/models/shared"
)

type VehicleGetUlezComplianceQueryParams struct {
	Vrm string `queryParam:"style=form,explode=true,name=vrm"`
}

type VehicleGetUlezComplianceRequest struct {
	QueryParams VehicleGetUlezComplianceQueryParams
}

type VehicleGetUlezComplianceResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	TflAPIPresentationEntitiesVehicleMatch *shared.TflAPIPresentationEntitiesVehicleMatch
}
