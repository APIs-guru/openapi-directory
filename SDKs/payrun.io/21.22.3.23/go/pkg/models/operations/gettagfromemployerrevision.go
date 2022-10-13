package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTagFromEmployerRevisionPathParams struct {
	EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployerID    string    `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID         string    `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetTagFromEmployerRevisionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagFromEmployerRevisionRequest struct {
	PathParams GetTagFromEmployerRevisionPathParams
	Headers    GetTagFromEmployerRevisionHeaders
}

type GetTagFromEmployerRevisionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
