package operations

import (
	"openapi/pkg/models/shared"
)

type StopPointArrivalDeparturesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type StopPointArrivalDeparturesQueryParams struct {
	LineIds []string `queryParam:"style=form,explode=true,name=lineIds"`
}

type StopPointArrivalDeparturesRequest struct {
	PathParams  StopPointArrivalDeparturesPathParams
	QueryParams StopPointArrivalDeparturesQueryParams
}

type StopPointArrivalDeparturesResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	TflAPIPresentationEntitiesArrivalDepartures []shared.TflAPIPresentationEntitiesArrivalDeparture
}
