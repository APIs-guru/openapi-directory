package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DeleteEmployerRevisionPathParams struct {
	EffectiveDate time.Time `pathParam:"style=simple,explode=false,name=EffectiveDate"`
	EmployerID    string    `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type DeleteEmployerRevisionHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteEmployerRevisionRequest struct {
	PathParams DeleteEmployerRevisionPathParams
	Headers    DeleteEmployerRevisionHeaders
}

type DeleteEmployerRevisionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
