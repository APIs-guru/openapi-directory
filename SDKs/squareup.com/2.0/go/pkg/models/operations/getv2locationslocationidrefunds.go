package operations

import (
"openapi/pkg/models/shared")

type GetV2LocationsLocationIDRefundsPathParams struct {
    LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
    
}

type GetV2LocationsLocationIDRefundsQueryParams struct {
    BeginTime *string `queryParam:"style=form,explode=true,name=begin_time"`
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    EndTime *string `queryParam:"style=form,explode=true,name=end_time"`
    SortOrder *string `queryParam:"style=form,explode=true,name=sort_order"`
    
}

type GetV2LocationsLocationIDRefundsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetV2LocationsLocationIDRefundsRequest struct {
    PathParams GetV2LocationsLocationIDRefundsPathParams 
    QueryParams GetV2LocationsLocationIDRefundsQueryParams 
    Security GetV2LocationsLocationIDRefundsSecurity 
    
}

type GetV2LocationsLocationIDRefundsResponse struct {
    ContentType string 
    ListRefundsResponse *shared.ListRefundsResponse 
    StatusCode int64 
    
}

