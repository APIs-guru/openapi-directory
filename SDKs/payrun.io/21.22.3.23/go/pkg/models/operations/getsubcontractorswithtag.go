package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubContractorsWithTagPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID      string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetSubContractorsWithTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetSubContractorsWithTagRequest struct {
	PathParams GetSubContractorsWithTagPathParams
	Headers    GetSubContractorsWithTagHeaders
}

type GetSubContractorsWithTagResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
