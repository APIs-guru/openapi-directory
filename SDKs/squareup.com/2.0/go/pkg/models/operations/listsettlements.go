package operations

import (
	"openapi/pkg/models/shared"
)

type ListSettlementsPathParams struct {
	LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
}

type ListSettlementsQueryParams struct {
	BatchToken *string `queryParam:"style=form,explode=true,name=batch_token"`
	BeginTime  *string `queryParam:"style=form,explode=true,name=begin_time"`
	EndTime    *string `queryParam:"style=form,explode=true,name=end_time"`
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	Order      *string `queryParam:"style=form,explode=true,name=order"`
	Status     *string `queryParam:"style=form,explode=true,name=status"`
}

type ListSettlementsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListSettlementsRequest struct {
	PathParams  ListSettlementsPathParams
	QueryParams ListSettlementsQueryParams
	Security    ListSettlementsSecurity
}

type ListSettlementsResponse struct {
	ContentType   string
	StatusCode    int64
	V1Settlements []shared.V1Settlement
}
