package operations

import (
	"openapi/pkg/models/shared"
)

type GetHTMLQueryParams struct {
	Headers map[string]string `queryParam:"style=form,explode=true,name=headers"`
	Js      *bool             `queryParam:"style=form,explode=true,name=js"`
	Proxy   *shared.ProxyEnum `queryParam:"style=form,explode=true,name=proxy"`
	Timeout *int64            `queryParam:"style=form,explode=true,name=timeout"`
	URL     string            `queryParam:"style=form,explode=true,name=url"`
}

type GetHTMLRequest struct {
	QueryParams GetHTMLQueryParams
}

type GetHTMLResponse struct {
	ContentType              string
	Error                    *shared.Error
	PageError                *shared.PageError
	StatusCode               int64
	GetHTML200TextHTMLString *string
}
