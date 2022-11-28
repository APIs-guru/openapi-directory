package operations

import (
	"openapi/pkg/models/shared"
)

type LineStatusByIdsPathParams struct {
	Ids []string `pathParam:"style=simple,explode=false,name=ids"`
}

type LineStatusByIdsQueryParams struct {
	Detail *bool `queryParam:"style=form,explode=true,name=detail"`
}

type LineStatusByIdsRequest struct {
	PathParams  LineStatusByIdsPathParams
	QueryParams LineStatusByIdsQueryParams
}

type LineStatusByIdsResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	TflAPIPresentationEntitiesLines []shared.TflAPIPresentationEntitiesLine
}
