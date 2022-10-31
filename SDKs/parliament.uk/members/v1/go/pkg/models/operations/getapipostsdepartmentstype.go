package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIPostsDepartmentsTypePathParams struct {
	Type int32 `pathParam:"style=simple,explode=false,name=type"`
}

type GetAPIPostsDepartmentsTypeRequest struct {
	PathParams GetAPIPostsDepartmentsTypePathParams
}

type GetAPIPostsDepartmentsTypeResponse struct {
	Body                  []byte
	ContentType           string
	GovernmentDepartments []shared.GovernmentDepartment
	StatusCode            int64
}
