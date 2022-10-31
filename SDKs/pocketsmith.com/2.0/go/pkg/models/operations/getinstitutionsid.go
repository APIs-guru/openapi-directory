package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstitutionsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstitutionsIDRequest struct {
	PathParams GetInstitutionsIDPathParams
}

type GetInstitutionsIDResponse struct {
	ContentType string
	Error       *shared.Error
	Institution *shared.Institution
	StatusCode  int64
}
