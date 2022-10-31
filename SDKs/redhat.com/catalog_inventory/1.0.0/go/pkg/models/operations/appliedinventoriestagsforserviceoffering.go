package operations

import (
"openapi/pkg/models/shared")

type AppliedInventoriesTagsForServiceOfferingPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type AppliedInventoriesTagsForServiceOfferingRequest struct {
    PathParams AppliedInventoriesTagsForServiceOfferingPathParams 
    Request shared.AppliedInventoriesParametersServicePlan `request:"mediaType=application/json"`
    
}

type AppliedInventoriesTagsForServiceOfferingResponse struct {
    ContentType string 
    StatusCode int64 
    Tags []shared.Tag 
    
}

