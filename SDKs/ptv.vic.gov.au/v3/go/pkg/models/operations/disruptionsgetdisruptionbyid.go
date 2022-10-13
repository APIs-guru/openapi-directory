package operations

import (
	"openapi/pkg/models/shared"
)

type DisruptionsGetDisruptionByIDPathParams struct {
	DisruptionID int64 `pathParam:"style=simple,explode=false,name=disruption_id"`
}

type DisruptionsGetDisruptionByIDQueryParams struct {
	Devid     *string `queryParam:"style=form,explode=true,name=devid"`
	Signature *string `queryParam:"style=form,explode=true,name=signature"`
	Token     *string `queryParam:"style=form,explode=true,name=token"`
}

type DisruptionsGetDisruptionByIDRequest struct {
	PathParams  DisruptionsGetDisruptionByIDPathParams
	QueryParams DisruptionsGetDisruptionByIDQueryParams
}

type DisruptionsGetDisruptionByIDResponse struct {
	Body                 []byte
	ContentType          string
	StatusCode           int64
	V3DisruptionResponse *shared.V3DisruptionResponse
	V3ErrorResponse      *shared.V3ErrorResponse
}
