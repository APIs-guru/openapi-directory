package operations

type GetPriceguideIDTransactionsSummaryPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPriceguideIDTransactionsSummaryQueryParams struct {
	Condition      *string `queryParam:"style=form,explode=true,name=condition"`
	NumberOfMonths *int64  `queryParam:"style=form,explode=true,name=number_of_months"`
}

type GetPriceguideIDTransactionsSummaryRequest struct {
	PathParams  GetPriceguideIDTransactionsSummaryPathParams
	QueryParams GetPriceguideIDTransactionsSummaryQueryParams
}

type GetPriceguideIDTransactionsSummaryResponse struct {
	ContentType string
	StatusCode  int64
}
