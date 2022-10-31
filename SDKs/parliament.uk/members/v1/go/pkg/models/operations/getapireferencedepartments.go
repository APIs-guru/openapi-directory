package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIReferenceDepartmentsQueryParams struct {
	ID           *int32  `queryParam:"style=form,explode=true,name=id"`
	NameContains *string `queryParam:"style=form,explode=true,name=nameContains"`
}

type GetAPIReferenceDepartmentsRequest struct {
	QueryParams GetAPIReferenceDepartmentsQueryParams
}

type GetAPIReferenceDepartmentsResponse struct {
	Body                  []byte
	ContentType           string
	GovernmentDepartments []shared.GovernmentDepartment
	StatusCode            int64
}
