package operations

import (
	"openapi/pkg/models/shared"
)

type ListRefundsPathParams struct {
	LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
}

type ListRefundsQueryParams struct {
	BatchToken *string `queryParam:"style=form,explode=true,name=batch_token"`
	BeginTime  *string `queryParam:"style=form,explode=true,name=begin_time"`
	EndTime    *string `queryParam:"style=form,explode=true,name=end_time"`
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	Order      *string `queryParam:"style=form,explode=true,name=order"`
}

type ListRefundsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListRefundsRequest struct {
	PathParams  ListRefundsPathParams
	QueryParams ListRefundsQueryParams
	Security    ListRefundsSecurity
}

type ListRefundsResponse struct {
	ContentType string
	StatusCode  int64
	V1Refunds   []shared.V1Refund
}
