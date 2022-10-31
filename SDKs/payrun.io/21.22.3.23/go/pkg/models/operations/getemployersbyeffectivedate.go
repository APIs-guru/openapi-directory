package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetEmployersByEffectiveDatePathParams struct {
	EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
}

type GetEmployersByEffectiveDateHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetEmployersByEffectiveDateRequest struct {
	PathParams GetEmployersByEffectiveDatePathParams
	Headers    GetEmployersByEffectiveDateHeaders
}

type GetEmployersByEffectiveDateResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
