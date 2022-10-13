package operations

import (
	"openapi/pkg/models/shared"
)

type ListPaymentRefundsQueryParams struct {
	BeginTime  *string `queryParam:"style=form,explode=true,name=begin_time"`
	Cursor     *string `queryParam:"style=form,explode=true,name=cursor"`
	EndTime    *string `queryParam:"style=form,explode=true,name=end_time"`
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	LocationID *string `queryParam:"style=form,explode=true,name=location_id"`
	SortOrder  *string `queryParam:"style=form,explode=true,name=sort_order"`
	SourceType *string `queryParam:"style=form,explode=true,name=source_type"`
	Status     *string `queryParam:"style=form,explode=true,name=status"`
}

type ListPaymentRefundsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListPaymentRefundsRequest struct {
	QueryParams ListPaymentRefundsQueryParams
	Security    ListPaymentRefundsSecurity
}

type ListPaymentRefundsResponse struct {
	ContentType                string
	ListPaymentRefundsResponse *shared.ListPaymentRefundsResponse
	StatusCode                 int64
}
