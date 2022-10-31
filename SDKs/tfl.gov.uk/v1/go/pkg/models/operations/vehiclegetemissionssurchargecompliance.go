package operations

import (
	"openapi/pkg/models/shared"
)

type VehicleGetEmissionsSurchargeComplianceQueryParams struct {
	Vrm string `queryParam:"style=form,explode=true,name=vrm"`
}

type VehicleGetEmissionsSurchargeComplianceRequest struct {
	QueryParams VehicleGetEmissionsSurchargeComplianceQueryParams
}

type VehicleGetEmissionsSurchargeComplianceResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	TflAPIPresentationEntitiesVehicleMatch *shared.TflAPIPresentationEntitiesVehicleMatch
}
