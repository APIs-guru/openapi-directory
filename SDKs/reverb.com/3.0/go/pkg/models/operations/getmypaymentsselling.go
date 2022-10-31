package operations

import (
"openapi/pkg/models/shared")

type GetMyPaymentsSellingQueryParams struct {
    CreatedEndDate *string `queryParam:"style=form,explode=true,name=created_end_date"`
    CreatedStartDate *string `queryParam:"style=form,explode=true,name=created_start_date"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    OrderID *string `queryParam:"style=form,explode=true,name=order_id"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    UpdatedEndDate *string `queryParam:"style=form,explode=true,name=updated_end_date"`
    UpdatedStartDate *string `queryParam:"style=form,explode=true,name=updated_start_date"`
    
}

type GetMyPaymentsSellingSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetMyPaymentsSellingRequest struct {
    QueryParams GetMyPaymentsSellingQueryParams 
    Security GetMyPaymentsSellingSecurity 
    
}

type GetMyPaymentsSellingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

