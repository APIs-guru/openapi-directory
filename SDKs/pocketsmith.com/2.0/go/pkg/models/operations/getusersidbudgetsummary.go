package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersIDBudgetSummaryPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetUsersIDBudgetSummaryPeriodEnum string

const (
	GetUsersIDBudgetSummaryPeriodEnumWeeks  GetUsersIDBudgetSummaryPeriodEnum = "weeks"
	GetUsersIDBudgetSummaryPeriodEnumMonths GetUsersIDBudgetSummaryPeriodEnum = "months"
	GetUsersIDBudgetSummaryPeriodEnumYears  GetUsersIDBudgetSummaryPeriodEnum = "years"
	GetUsersIDBudgetSummaryPeriodEnumEvent  GetUsersIDBudgetSummaryPeriodEnum = "event"
)

type GetUsersIDBudgetSummaryQueryParams struct {
	EndDate   string                            `queryParam:"style=form,explode=true,name=end_date"`
	Interval  int64                             `queryParam:"style=form,explode=true,name=interval"`
	Period    GetUsersIDBudgetSummaryPeriodEnum `queryParam:"style=form,explode=true,name=period"`
	StartDate string                            `queryParam:"style=form,explode=true,name=start_date"`
}

type GetUsersIDBudgetSummaryRequest struct {
	PathParams  GetUsersIDBudgetSummaryPathParams
	QueryParams GetUsersIDBudgetSummaryQueryParams
}

type GetUsersIDBudgetSummaryResponse struct {
	BudgetAnalysisPackages []shared.BudgetAnalysisPackage
	ContentType            string
	StatusCode             int64
}
