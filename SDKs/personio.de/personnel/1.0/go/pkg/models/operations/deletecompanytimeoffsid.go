package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCompanyTimeOffsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteCompanyTimeOffsIDRequest struct {
	PathParams DeleteCompanyTimeOffsIDPathParams
}

type DeleteCompanyTimeOffsIDResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Response      *shared.Response
	StatusCode    int64
}
