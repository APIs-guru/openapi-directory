package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListPayeeChangesV3QueryParams struct {
	Page         *int32    `queryParam:"style=form,explode=true,name=page"`
	PageSize     *int32    `queryParam:"style=form,explode=true,name=pageSize"`
	PayorID      string    `queryParam:"style=form,explode=true,name=payorId"`
	UpdatedSince time.Time `queryParam:"style=form,explode=true,name=updatedSince"`
}

type ListPayeeChangesV3Request struct {
	QueryParams ListPayeeChangesV3QueryParams
}

type ListPayeeChangesV3Response struct {
	ContentType        string
	PayeeDeltaResponse *shared.PayeeDeltaResponse
	StatusCode         int64
}
