package operations

import (
	"openapi/pkg/models/shared"
)

type GetScriptsInventoryParsedQueryParams struct {
	Language *string `queryParam:"style=form,explode=true,name=language"`
}

type GetScriptsInventoryParsedRequest struct {
	QueryParams GetScriptsInventoryParsedQueryParams
}

type GetScriptsInventoryParsedResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	InventoryScriptInfos []shared.InventoryScriptInfo
	StatusCode           int64
}
