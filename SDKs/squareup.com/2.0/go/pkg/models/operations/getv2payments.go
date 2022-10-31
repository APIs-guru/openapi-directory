package operations

import (
"openapi/pkg/models/shared")

type GetV2PaymentsQueryParams struct {
    BeginTime *string `queryParam:"style=form,explode=true,name=begin_time"`
    CardBrand *string `queryParam:"style=form,explode=true,name=card_brand"`
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    EndTime *string `queryParam:"style=form,explode=true,name=end_time"`
    Last4 *string `queryParam:"style=form,explode=true,name=last_4"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    LocationID *string `queryParam:"style=form,explode=true,name=location_id"`
    SortOrder *string `queryParam:"style=form,explode=true,name=sort_order"`
    Total *int64 `queryParam:"style=form,explode=true,name=total"`
    
}

type GetV2PaymentsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetV2PaymentsRequest struct {
    QueryParams GetV2PaymentsQueryParams 
    Security GetV2PaymentsSecurity 
    
}

type GetV2PaymentsResponse struct {
    ContentType string 
    ListPaymentsResponse *shared.ListPaymentsResponse 
    StatusCode int64 
    
}

