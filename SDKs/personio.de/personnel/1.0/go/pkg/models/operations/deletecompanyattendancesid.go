package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCompanyAttendancesIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteCompanyAttendancesIDRequest struct {
	PathParams DeleteCompanyAttendancesIDPathParams
}

type DeleteCompanyAttendancesIDResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Response      *shared.Response
	StatusCode    int64
}
