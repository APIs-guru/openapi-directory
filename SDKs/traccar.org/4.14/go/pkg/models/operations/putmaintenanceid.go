package operations

import (
	"openapi/pkg/models/shared"
)

type PutMaintenanceIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutMaintenanceIDRequest struct {
	PathParams PutMaintenanceIDPathParams
	Request    shared.Maintenance `request:"mediaType=application/json"`
}

type PutMaintenanceIDResponse struct {
	ContentType string
	Maintenance *shared.Maintenance
	StatusCode  int64
}
