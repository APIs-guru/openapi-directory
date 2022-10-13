package operations

import (
	"openapi/pkg/models/shared"
)

type OutletsGetAllOutletsQueryParams struct {
	Devid      *string `queryParam:"style=form,explode=true,name=devid"`
	MaxResults *int32  `queryParam:"style=form,explode=true,name=max_results"`
	Signature  *string `queryParam:"style=form,explode=true,name=signature"`
	Token      *string `queryParam:"style=form,explode=true,name=token"`
}

type OutletsGetAllOutletsRequest struct {
	QueryParams OutletsGetAllOutletsQueryParams
}

type OutletsGetAllOutletsResponse struct {
	Body             []byte
	ContentType      string
	StatusCode       int64
	V3ErrorResponse  *shared.V3ErrorResponse
	V3OutletResponse *shared.V3OutletResponse
}
