package operations

import (
	"openapi/pkg/models/shared"
)

type OccupancyGetChargeConnectorStatusPathParams struct {
	Ids []string `pathParam:"style=simple,explode=false,name=ids"`
}

type OccupancyGetChargeConnectorStatusRequest struct {
	PathParams OccupancyGetChargeConnectorStatusPathParams
}

type OccupancyGetChargeConnectorStatusResponse struct {
	Body                                                 []byte
	ContentType                                          string
	StatusCode                                           int64
	TflAPIPresentationEntitiesChargeConnectorOccupancies []shared.TflAPIPresentationEntitiesChargeConnectorOccupancy
}
