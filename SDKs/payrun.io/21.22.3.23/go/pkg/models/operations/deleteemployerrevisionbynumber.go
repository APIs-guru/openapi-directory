package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEmployerRevisionByNumberPathParams struct {
	EmployerID     string `pathParam:"style=simple,explode=false,name=EmployerId"`
	RevisionNumber string `pathParam:"style=simple,explode=false,name=RevisionNumber"`
}

type DeleteEmployerRevisionByNumberHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteEmployerRevisionByNumberRequest struct {
	PathParams DeleteEmployerRevisionByNumberPathParams
	Headers    DeleteEmployerRevisionByNumberHeaders
}

type DeleteEmployerRevisionByNumberResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
