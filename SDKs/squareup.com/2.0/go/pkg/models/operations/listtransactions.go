package operations

import (
"openapi/pkg/models/shared")

type ListTransactionsPathParams struct {
    LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
    
}

type ListTransactionsQueryParams struct {
    BeginTime *string `queryParam:"style=form,explode=true,name=begin_time"`
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    EndTime *string `queryParam:"style=form,explode=true,name=end_time"`
    SortOrder *string `queryParam:"style=form,explode=true,name=sort_order"`
    
}

type ListTransactionsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListTransactionsRequest struct {
    PathParams ListTransactionsPathParams 
    QueryParams ListTransactionsQueryParams 
    Security ListTransactionsSecurity 
    
}

type ListTransactionsResponse struct {
    ContentType string 
    ListTransactionsResponse *shared.ListTransactionsResponse 
    StatusCode int64 
    
}

