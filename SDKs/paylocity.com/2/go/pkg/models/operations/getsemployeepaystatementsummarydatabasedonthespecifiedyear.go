package operations

import (
"openapi/pkg/models/shared")

type GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams struct {
    CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
    EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
    Year string `pathParam:"style=simple,explode=false,name=year"`
    
}

type GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams struct {
    Dettypes *string `queryParam:"style=form,explode=true,name=dettypes"`
    Includetotalcount *bool `queryParam:"style=form,explode=true,name=includetotalcount"`
    Pagenumber *int64 `queryParam:"style=form,explode=true,name=pagenumber"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    
}

type GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity struct {
    PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
    
}

type GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest struct {
    PathParams GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams 
    QueryParams GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams 
    Security GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity 
    
}

type GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse struct {
    ContentType string 
    StatusCode int64 
    Errors []shared.Error 
    PayStatementSummaries []shared.PayStatementSummary 
    
}

