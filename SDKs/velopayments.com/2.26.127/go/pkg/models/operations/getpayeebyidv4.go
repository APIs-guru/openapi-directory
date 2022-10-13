package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayeeByIDV4PathParams struct {
	PayeeID string `pathParam:"style=simple,explode=false,name=payeeId"`
}

type GetPayeeByIDV4QueryParams struct {
	Sensitive *bool `queryParam:"style=form,explode=true,name=sensitive"`
}

type GetPayeeByIDV4Request struct {
	PathParams  GetPayeeByIDV4PathParams
	QueryParams GetPayeeByIDV4QueryParams
}

type GetPayeeByIDV4Response struct {
	ContentType          string
	PayeeDetailResponse2 *shared.PayeeDetailResponse2
	StatusCode           int64
}
