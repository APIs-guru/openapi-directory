package operations

import (
	"openapi/pkg/models/shared"
)

type ShowSourcePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ShowSourceRequest struct {
	PathParams ShowSourcePathParams
}

type ShowSourceResponse struct {
	ContentType   string
	ErrorNotFound *shared.ErrorNotFound
	Source        *shared.Source
	StatusCode    int64
}
