package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPensionsByEffectiveDatePathParams struct {
	EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployerID    string    `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetPensionsByEffectiveDateHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetPensionsByEffectiveDateRequest struct {
	PathParams GetPensionsByEffectiveDatePathParams
	Headers    GetPensionsByEffectiveDateHeaders
}

type GetPensionsByEffectiveDateResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
