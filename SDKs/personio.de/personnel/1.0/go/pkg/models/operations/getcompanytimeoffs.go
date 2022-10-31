package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCompanyTimeOffsQueryParams struct {
	Employees   []int64    `queryParam:"style=form,explode=true,name=employees"`
	EndDate     *time.Time `queryParam:"style=form,explode=true,name=end_date"`
	Limit       *int64     `queryParam:"style=form,explode=true,name=limit"`
	Offset      *int64     `queryParam:"style=form,explode=true,name=offset"`
	StartDate   *time.Time `queryParam:"style=form,explode=true,name=start_date"`
	UpdatedFrom *string    `queryParam:"style=form,explode=true,name=updated_from"`
	UpdatedTo   *string    `queryParam:"style=form,explode=true,name=updated_to"`
}

type GetCompanyTimeOffsRequest struct {
	QueryParams GetCompanyTimeOffsQueryParams
}

type GetCompanyTimeOffsResponse struct {
	AbsencePeriodsResponse *shared.AbsencePeriodsResponse
	ContentType            string
	StatusCode             int64
}
