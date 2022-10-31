package operations

import (
"openapi/pkg/models/shared")

type ListGiftCardActivitiesQueryParams struct {
    BeginTime *string `queryParam:"style=form,explode=true,name=begin_time"`
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    EndTime *string `queryParam:"style=form,explode=true,name=end_time"`
    GiftCardID *string `queryParam:"style=form,explode=true,name=gift_card_id"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    LocationID *string `queryParam:"style=form,explode=true,name=location_id"`
    SortOrder *string `queryParam:"style=form,explode=true,name=sort_order"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    
}

type ListGiftCardActivitiesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListGiftCardActivitiesRequest struct {
    QueryParams ListGiftCardActivitiesQueryParams 
    Security ListGiftCardActivitiesSecurity 
    
}

type ListGiftCardActivitiesResponse struct {
    ContentType string 
    ListGiftCardActivitiesResponse *shared.ListGiftCardActivitiesResponse 
    StatusCode int64 
    
}

