package operations

import (
"time"
"openapi/pkg/models/shared")

type GetStatisticsQueryParams struct {
    From time.Time `queryParam:"style=form,explode=true,name=from"`
    To time.Time `queryParam:"style=form,explode=true,name=to"`
    
}

type GetStatisticsRequest struct {
    QueryParams GetStatisticsQueryParams 
    
}

type GetStatisticsResponse struct {
    ContentType string 
    Statistics []shared.Statistics 
    StatusCode int64 
    
}

