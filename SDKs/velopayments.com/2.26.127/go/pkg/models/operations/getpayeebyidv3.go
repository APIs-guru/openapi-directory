package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayeeByIDV3PathParams struct {
	PayeeID string `pathParam:"style=simple,explode=false,name=payeeId"`
}

type GetPayeeByIDV3QueryParams struct {
	Sensitive *bool `queryParam:"style=form,explode=true,name=sensitive"`
}

type GetPayeeByIDV3Request struct {
	PathParams  GetPayeeByIDV3PathParams
	QueryParams GetPayeeByIDV3QueryParams
}

type GetPayeeByIDV3Response struct {
	ContentType         string
	PayeeDetailResponse *shared.PayeeDetailResponse
	StatusCode          int64
}
