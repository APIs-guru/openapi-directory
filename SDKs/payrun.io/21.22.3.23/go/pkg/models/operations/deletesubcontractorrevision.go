package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DeleteSubContractorRevisionPathParams struct {
	EffectiveDate   time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployerID      string    `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string    `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type DeleteSubContractorRevisionHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteSubContractorRevisionRequest struct {
	PathParams DeleteSubContractorRevisionPathParams
	Headers    DeleteSubContractorRevisionHeaders
}

type DeleteSubContractorRevisionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
