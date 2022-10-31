package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ActionsGetRequest struct {
	PathParams ActionsGetPathParams
}

type ActionsGetResponse struct {
	ActionInformations []shared.ActionInformation
	Body               []byte
	ContentType        string
	StatusCode         int64
}
