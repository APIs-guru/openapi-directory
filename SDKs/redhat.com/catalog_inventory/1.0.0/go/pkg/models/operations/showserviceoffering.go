package operations

import (
	"openapi/pkg/models/shared"
)

type ShowServiceOfferingPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ShowServiceOfferingRequest struct {
	PathParams ShowServiceOfferingPathParams
}

type ShowServiceOfferingResponse struct {
	ContentType     string
	ErrorNotFound   *shared.ErrorNotFound
	ServiceOffering *shared.ServiceOffering
	StatusCode      int64
}
