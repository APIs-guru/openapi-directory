package operations

import (
"openapi/pkg/models/shared")

type ListServiceOfferingServicePlansPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ListServiceOfferingServicePlansQueryParams struct {
    Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
    
}

type ListServiceOfferingServicePlansRequest struct {
    PathParams ListServiceOfferingServicePlansPathParams 
    QueryParams ListServiceOfferingServicePlansQueryParams 
    
}

type ListServiceOfferingServicePlansResponse struct {
    ContentType string 
    ErrorNotFound *shared.ErrorNotFound 
    ServicePlansCollection *shared.ServicePlansCollection 
    StatusCode int64 
    
}

