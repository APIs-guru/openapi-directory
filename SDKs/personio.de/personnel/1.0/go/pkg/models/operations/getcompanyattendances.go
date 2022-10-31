package operations

import (
"time"
"openapi/pkg/models/shared")

type GetCompanyAttendancesQueryParams struct {
    Employees []int64 `queryParam:"style=form,explode=true,name=employees"`
    EndDate time.Time `queryParam:"style=form,explode=true,name=end_date"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    StartDate time.Time `queryParam:"style=form,explode=true,name=start_date"`
    UpdatedFrom *string `queryParam:"style=form,explode=true,name=updated_from"`
    UpdatedTo *string `queryParam:"style=form,explode=true,name=updated_to"`
    
}

type GetCompanyAttendancesRequest struct {
    QueryParams GetCompanyAttendancesQueryParams 
    
}

type GetCompanyAttendancesResponse struct {
    AttendancePeriodsResponse *shared.AttendancePeriodsResponse 
    ContentType string 
    StatusCode int64 
    
}

