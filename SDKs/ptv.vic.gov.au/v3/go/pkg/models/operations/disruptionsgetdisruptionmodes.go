package operations

import (
	"openapi/pkg/models/shared"
)

type DisruptionsGetDisruptionModesQueryParams struct {
	Devid     *string `queryParam:"style=form,explode=true,name=devid"`
	Signature *string `queryParam:"style=form,explode=true,name=signature"`
	Token     *string `queryParam:"style=form,explode=true,name=token"`
}

type DisruptionsGetDisruptionModesRequest struct {
	QueryParams DisruptionsGetDisruptionModesQueryParams
}

type DisruptionsGetDisruptionModesResponse struct {
	Body                      []byte
	ContentType               string
	StatusCode                int64
	V3DisruptionModesResponse *shared.V3DisruptionModesResponse
	V3ErrorResponse           *shared.V3ErrorResponse
}
