package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTagsFromSubContractorRevisionPathParams struct {
	EffectiveDate   time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployerID      string    `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string    `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type GetTagsFromSubContractorRevisionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagsFromSubContractorRevisionRequest struct {
	PathParams GetTagsFromSubContractorRevisionPathParams
	Headers    GetTagsFromSubContractorRevisionHeaders
}

type GetTagsFromSubContractorRevisionResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
