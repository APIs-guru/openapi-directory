package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPayCodeByEffectiveDatePathParams struct {
	EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployerID    string    `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayCodeID     string    `pathParam:"style=simple,explode=false,name=PayCodeId"`
}

type GetPayCodeByEffectiveDateHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetPayCodeByEffectiveDateRequest struct {
	PathParams GetPayCodeByEffectiveDatePathParams
	Headers    GetPayCodeByEffectiveDateHeaders
}

type GetPayCodeByEffectiveDateResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	PayCode     *shared.PayCode
	StatusCode  int64
}
