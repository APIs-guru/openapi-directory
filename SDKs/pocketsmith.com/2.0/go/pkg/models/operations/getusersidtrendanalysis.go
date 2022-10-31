package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersIDTrendAnalysisPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetUsersIDTrendAnalysisPeriodEnum string

const (
	GetUsersIDTrendAnalysisPeriodEnumWeeks  GetUsersIDTrendAnalysisPeriodEnum = "weeks"
	GetUsersIDTrendAnalysisPeriodEnumMonths GetUsersIDTrendAnalysisPeriodEnum = "months"
	GetUsersIDTrendAnalysisPeriodEnumYears  GetUsersIDTrendAnalysisPeriodEnum = "years"
	GetUsersIDTrendAnalysisPeriodEnumEvent  GetUsersIDTrendAnalysisPeriodEnum = "event"
)

type GetUsersIDTrendAnalysisQueryParams struct {
	Categories string                            `queryParam:"style=form,explode=true,name=categories"`
	EndDate    string                            `queryParam:"style=form,explode=true,name=end_date"`
	Interval   int64                             `queryParam:"style=form,explode=true,name=interval"`
	Period     GetUsersIDTrendAnalysisPeriodEnum `queryParam:"style=form,explode=true,name=period"`
	Scenarios  string                            `queryParam:"style=form,explode=true,name=scenarios"`
	StartDate  string                            `queryParam:"style=form,explode=true,name=start_date"`
}

type GetUsersIDTrendAnalysisRequest struct {
	PathParams  GetUsersIDTrendAnalysisPathParams
	QueryParams GetUsersIDTrendAnalysisQueryParams
}

type GetUsersIDTrendAnalysisResponse struct {
	BudgetAnalysisPackages []shared.BudgetAnalysisPackage
	ContentType            string
	StatusCode             int64
}
