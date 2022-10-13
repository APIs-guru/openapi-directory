package operations

import (
	"openapi/pkg/models/shared"
)

type SavePatientManagementPathParams struct {
	GroupID      int64 `pathParam:"style=simple,explode=false,name=groupId"`
	IdentifierID int64 `pathParam:"style=simple,explode=false,name=identifierId"`
	UserID       int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type SavePatientManagementRequest struct {
	PathParams SavePatientManagementPathParams
	Request    *shared.PatientManagement `request:"mediaType=application/json"`
}

type SavePatientManagementResponse struct {
	ContentType string
	StatusCode  int64
}
