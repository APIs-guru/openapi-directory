package operations

import (
"openapi/pkg/models/shared")

type GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDatePathParams struct {
    CheckDate string `pathParam:"style=simple,explode=false,name=checkDate"`
    CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
    EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
    Year string `pathParam:"style=simple,explode=false,name=year"`
    
}

type GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateQueryParams struct {
    Dettypes *string `queryParam:"style=form,explode=true,name=dettypes"`
    Includetotalcount *bool `queryParam:"style=form,explode=true,name=includetotalcount"`
    Pagenumber *int64 `queryParam:"style=form,explode=true,name=pagenumber"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    
}

type GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity struct {
    PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
    
}

type GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest struct {
    PathParams GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDatePathParams 
    QueryParams GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateQueryParams 
    Security GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity 
    
}

type GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse struct {
    ContentType string 
    StatusCode int64 
    Errors []shared.Error 
    PayStatementSummaries []shared.PayStatementSummary 
    
}

