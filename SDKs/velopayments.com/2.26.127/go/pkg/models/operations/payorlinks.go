package operations

import (
"openapi/pkg/models/shared")

type PayorLinksQueryParams struct {
    DescendantsOfPayor *string `queryParam:"style=form,explode=true,name=descendantsOfPayor"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    ParentOfPayor *string `queryParam:"style=form,explode=true,name=parentOfPayor"`
    
}

type PayorLinksRequest struct {
    QueryParams PayorLinksQueryParams 
    
}

type PayorLinksResponse struct {
    ContentType string 
    PayorLinksResponse *shared.PayorLinksResponse 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

