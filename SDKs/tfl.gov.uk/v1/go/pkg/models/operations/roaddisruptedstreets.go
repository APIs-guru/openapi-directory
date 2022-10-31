package operations

import (
"time")

type RoadDisruptedStreetsQueryParams struct {
    EndDate time.Time `queryParam:"style=form,explode=true,name=endDate"`
    StartDate time.Time `queryParam:"style=form,explode=true,name=startDate"`
    
}

type RoadDisruptedStreetsRequest struct {
    QueryParams RoadDisruptedStreetsQueryParams 
    
}

type RoadDisruptedStreetsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    SystemObject map[string]interface{} 
    
}

