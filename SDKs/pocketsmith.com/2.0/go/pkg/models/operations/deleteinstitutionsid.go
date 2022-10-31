package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteInstitutionsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteInstitutionsIDRequest struct {
	PathParams DeleteInstitutionsIDPathParams
}

type DeleteInstitutionsIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
