package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTagsFromEmployeeRevisionPathParams struct {
	EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployeeID    string    `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID    string    `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetTagsFromEmployeeRevisionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagsFromEmployeeRevisionRequest struct {
	PathParams GetTagsFromEmployeeRevisionPathParams
	Headers    GetTagsFromEmployeeRevisionHeaders
}

type GetTagsFromEmployeeRevisionResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
