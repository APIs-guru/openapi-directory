package operations

import (
	"openapi/pkg/models/shared"
)

type GetPatientManagementLookupTypesResponse struct {
	ContentType string
	LookupTypes []shared.LookupType
	StatusCode  int64
}
