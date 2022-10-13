package operations

import (
	"openapi/pkg/models/shared"
)

type GetShowsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetShowsIDQueryParams struct {
	Expand []string `queryParam:"style=form,explode=true,name=expand"`
	Fields []string `queryParam:"style=form,explode=true,name=fields"`
}

type GetShowsIDRequest struct {
	PathParams  GetShowsIDPathParams
	QueryParams GetShowsIDQueryParams
}

type GetShowsIDResponse struct {
	Body        []byte
	ContentType string
	Error       *shared.Error
	Show        *shared.Show
	StatusCode  int64
}
