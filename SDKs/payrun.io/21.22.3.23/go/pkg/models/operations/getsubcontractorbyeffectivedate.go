package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSubContractorByEffectiveDatePathParams struct {
	EffectiveDate   time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployerID      string    `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string    `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type GetSubContractorByEffectiveDateHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetSubContractorByEffectiveDateRequest struct {
	PathParams GetSubContractorByEffectiveDatePathParams
	Headers    GetSubContractorByEffectiveDateHeaders
}

type GetSubContractorByEffectiveDateResponse struct {
	ContentType   string
	ErrorModel    *shared.ErrorModel
	StatusCode    int64
	SubContractor *shared.SubContractor
}
