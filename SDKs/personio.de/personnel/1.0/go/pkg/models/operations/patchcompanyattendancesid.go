package operations

import (
	"openapi/pkg/models/shared"
)

type PatchCompanyAttendancesIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PatchCompanyAttendancesIDRequest struct {
	PathParams PatchCompanyAttendancesIDPathParams
	Request    shared.UpdateAttendancePeriodRequest `request:"mediaType=application/json"`
}

type PatchCompanyAttendancesIDResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Response      *shared.Response
	StatusCode    int64
}
