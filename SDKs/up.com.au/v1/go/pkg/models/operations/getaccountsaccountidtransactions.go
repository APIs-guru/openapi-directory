package operations

import (
"time"
"openapi/pkg/models/shared")

type GetAccountsAccountIDTransactionsPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}

type GetAccountsAccountIDTransactionsQueryParams struct {
    FilterCategory *string `queryParam:"style=form,explode=true,name=filter[category]"`
    FilterSince *time.Time `queryParam:"style=form,explode=true,name=filter[since]"`
    FilterStatus *interface{} `queryParam:"style=form,explode=true,name=filter[status]"`
    FilterTag *string `queryParam:"style=form,explode=true,name=filter[tag]"`
    FilterUntil *time.Time `queryParam:"style=form,explode=true,name=filter[until]"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page[size]"`
    
}

type GetAccountsAccountIDTransactionsRequest struct {
    PathParams GetAccountsAccountIDTransactionsPathParams 
    QueryParams GetAccountsAccountIDTransactionsQueryParams 
    
}

type GetAccountsAccountIDTransactionsResponse struct {
    ContentType string 
    ListTransactionsResponse *shared.ListTransactionsResponse 
    StatusCode int64 
    
}

