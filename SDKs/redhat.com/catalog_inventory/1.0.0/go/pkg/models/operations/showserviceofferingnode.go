package operations

import (
	"openapi/pkg/models/shared"
)

type ShowServiceOfferingNodePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ShowServiceOfferingNodeRequest struct {
	PathParams ShowServiceOfferingNodePathParams
}

type ShowServiceOfferingNodeResponse struct {
	ContentType         string
	ErrorNotFound       *shared.ErrorNotFound
	ServiceOfferingNode *shared.ServiceOfferingNode
	StatusCode          int64
}
