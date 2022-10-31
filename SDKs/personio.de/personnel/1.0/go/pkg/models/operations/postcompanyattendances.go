package operations

import (
	"openapi/pkg/models/shared"
)

type PostCompanyAttendancesRequest struct {
	Request shared.NewAttendancePeriodRequest `request:"mediaType=application/json"`
}

type PostCompanyAttendancesResponse struct {
	ContentType                 string
	DetailedErrorResponse       *shared.DetailedErrorResponse
	NewAttendancePeriodResponse *shared.NewAttendancePeriodResponse
	StatusCode                  int64
}
