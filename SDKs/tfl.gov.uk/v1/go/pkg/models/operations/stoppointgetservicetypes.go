package operations

import (
	"openapi/pkg/models/shared"
)

type StopPointGetServiceTypesQueryParams struct {
	ID      string   `queryParam:"style=form,explode=true,name=id"`
	LineIds []string `queryParam:"style=form,explode=true,name=lineIds"`
	Modes   []string `queryParam:"style=form,explode=true,name=modes"`
}

type StopPointGetServiceTypesRequest struct {
	QueryParams StopPointGetServiceTypesQueryParams
}

type StopPointGetServiceTypesResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	TflAPIPresentationEntitiesLineServiceTypes []shared.TflAPIPresentationEntitiesLineServiceType
}
