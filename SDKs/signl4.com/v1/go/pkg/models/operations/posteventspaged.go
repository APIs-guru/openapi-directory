package operations

import (
"openapi/pkg/models/shared")

type PostEventsPagedQueryParams struct {
    MaxResults *int32 `queryParam:"style=form,explode=true,name=maxResults"`
    
}

type PostEventsPagedRequests struct {
    EventFilter *shared.EventFilter `request:"mediaType=application/*+json"`
    EventFilter1 *shared.EventFilter `request:"mediaType=application/json"`
    EventFilter2 *shared.EventFilter `request:"mediaType=application/json-patch+json"`
    EventFilter3 *shared.EventFilter `request:"mediaType=text/json"`
    
}

type PostEventsPagedRequest struct {
    QueryParams PostEventsPagedQueryParams 
    Request *PostEventsPagedRequests 
    
}

type PostEventsPagedResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    OverviewEventPagedResultsPublic *shared.OverviewEventPagedResultsPublic 
    StatusCode int64 
    
}

