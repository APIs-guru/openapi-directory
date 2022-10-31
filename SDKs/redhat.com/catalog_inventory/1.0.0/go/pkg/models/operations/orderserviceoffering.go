package operations

import (
"openapi/pkg/models/shared")

type OrderServiceOfferingPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type OrderServiceOfferingRequest struct {
    PathParams OrderServiceOfferingPathParams 
    Request shared.OrderParametersServiceOffering `request:"mediaType=application/json"`
    
}

type OrderServiceOffering200ApplicationJSON struct {
    TaskID *string `json:"task_id,omitempty"`
    
}

type OrderServiceOfferingResponse struct {
    ContentType string 
    StatusCode int64 
    OrderServiceOffering200ApplicationJSONObject *OrderServiceOffering200ApplicationJSON 
    
}

