package operations

import (
	"openapi/pkg/models/shared"
)

type GetSelectedQueryParams struct {
	Headers  map[string]string `queryParam:"style=form,explode=true,name=headers"`
	Js       *bool             `queryParam:"style=form,explode=true,name=js"`
	Proxy    *shared.ProxyEnum `queryParam:"style=form,explode=true,name=proxy"`
	Selector *string           `queryParam:"style=form,explode=true,name=selector"`
	Timeout  *int64            `queryParam:"style=form,explode=true,name=timeout"`
	URL      string            `queryParam:"style=form,explode=true,name=url"`
}

type GetSelectedRequest struct {
	QueryParams GetSelectedQueryParams
}

type GetSelectedResponse struct {
	Body        []byte
	ContentType string
	Error       *shared.Error
	PageError   *shared.PageError
	StatusCode  int64
}
