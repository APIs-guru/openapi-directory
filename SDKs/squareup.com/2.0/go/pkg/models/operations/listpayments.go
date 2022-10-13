package operations

import (
	"openapi/pkg/models/shared"
)

type ListPaymentsPathParams struct {
	LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
}

type ListPaymentsQueryParams struct {
	BatchToken     *string `queryParam:"style=form,explode=true,name=batch_token"`
	BeginTime      *string `queryParam:"style=form,explode=true,name=begin_time"`
	EndTime        *string `queryParam:"style=form,explode=true,name=end_time"`
	IncludePartial *bool   `queryParam:"style=form,explode=true,name=include_partial"`
	Limit          *int64  `queryParam:"style=form,explode=true,name=limit"`
	Order          *string `queryParam:"style=form,explode=true,name=order"`
}

type ListPaymentsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListPaymentsRequest struct {
	PathParams  ListPaymentsPathParams
	QueryParams ListPaymentsQueryParams
	Security    ListPaymentsSecurity
}

type ListPaymentsResponse struct {
	ContentType string
	StatusCode  int64
	V1Payments  []shared.V1Payment
}
