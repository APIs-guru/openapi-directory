package operations

import (
	"openapi/pkg/models/shared"
)

type ShowServiceCredentialTypePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ShowServiceCredentialTypeRequest struct {
	PathParams ShowServiceCredentialTypePathParams
}

type ShowServiceCredentialTypeResponse struct {
	ContentType           string
	ErrorNotFound         *shared.ErrorNotFound
	ServiceCredentialType *shared.ServiceCredentialType
	StatusCode            int64
}
