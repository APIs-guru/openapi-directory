package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTagFromSubContractorRevisionPathParams struct {
	EffectiveDate   time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployerID      string    `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string    `pathParam:"style=simple,explode=false,name=SubContractorId"`
	TagID           string    `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetTagFromSubContractorRevisionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagFromSubContractorRevisionRequest struct {
	PathParams GetTagFromSubContractorRevisionPathParams
	Headers    GetTagFromSubContractorRevisionHeaders
}

type GetTagFromSubContractorRevisionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
