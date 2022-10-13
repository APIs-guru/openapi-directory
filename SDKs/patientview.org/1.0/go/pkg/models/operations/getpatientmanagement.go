package operations

import (
	"openapi/pkg/models/shared"
)

type GetPatientManagementPathParams struct {
	GroupID      int64 `pathParam:"style=simple,explode=false,name=groupId"`
	IdentifierID int64 `pathParam:"style=simple,explode=false,name=identifierId"`
	UserID       int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetPatientManagementRequest struct {
	PathParams GetPatientManagementPathParams
}

type GetPatientManagementResponse struct {
	ContentType       string
	PatientManagement *shared.PatientManagement
	StatusCode        int64
}
