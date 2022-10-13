package operations

import (
	"openapi/pkg/models/shared"
)

type GetFundingsV4QueryParams struct {
	Page     *int32  `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	PayorID  string  `queryParam:"style=form,explode=true,name=payorId"`
	Sort     *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetFundingsV4Request struct {
	QueryParams GetFundingsV4QueryParams
}

type GetFundingsV4Response struct {
	ContentType         string
	GetFundingsResponse *shared.GetFundingsResponse
	StatusCode          int64
	InlineResponse400   *interface{}
	InlineResponse401   *interface{}
	InlineResponse403   *interface{}
	InlineResponse404   *interface{}
}
