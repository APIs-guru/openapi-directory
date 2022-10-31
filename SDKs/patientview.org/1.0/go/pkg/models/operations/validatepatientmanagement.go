package operations

import (
	"openapi/pkg/models/shared"
)

type ValidatePatientManagementRequest struct {
	Request *shared.PatientManagement `request:"mediaType=application/json"`
}

type ValidatePatientManagementResponse struct {
	ContentType string
	StatusCode  int64
}
