package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListPaymentChangesQueryParams struct {
	Page         *int32    `queryParam:"style=form,explode=true,name=page"`
	PageSize     *int32    `queryParam:"style=form,explode=true,name=pageSize"`
	PayorID      string    `queryParam:"style=form,explode=true,name=payorId"`
	UpdatedSince time.Time `queryParam:"style=form,explode=true,name=updatedSince"`
}

type ListPaymentChangesRequest struct {
	QueryParams ListPaymentChangesQueryParams
}

type ListPaymentChangesResponse struct {
	ContentType            string
	PaymentDeltaResponseV1 *shared.PaymentDeltaResponseV1
	StatusCode             int64
}
