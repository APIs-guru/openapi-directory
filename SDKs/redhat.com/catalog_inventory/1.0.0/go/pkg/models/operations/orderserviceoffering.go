package operations

import (
	"openapi/pkg/models/shared"
)

type OrderServiceOfferingPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OrderServiceOffering200ApplicationJSON struct {
	TaskID *string `json:"task_id,omitempty"`
}

type OrderServiceOfferingRequest struct {
	PathParams OrderServiceOfferingPathParams
	Request    shared.OrderParametersServiceOfferingInput `request:"mediaType=application/json"`
}

type OrderServiceOfferingResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	OrderServiceOffering200ApplicationJSONObject *OrderServiceOffering200ApplicationJSON
}
