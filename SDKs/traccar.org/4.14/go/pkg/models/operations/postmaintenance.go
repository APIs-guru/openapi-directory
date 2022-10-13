package operations

import (
	"openapi/pkg/models/shared"
)

type PostMaintenanceRequest struct {
	Request shared.Maintenance `request:"mediaType=application/json"`
}

type PostMaintenanceResponse struct {
	ContentType string
	Maintenance *shared.Maintenance
	StatusCode  int64
}
