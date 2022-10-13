package operations

import (
	"openapi/pkg/models/shared"
)

type GetPicturesAlt1QueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetPicturesAlt1Request struct {
	QueryParams GetPicturesAlt1QueryParams
}

type GetPicturesAlt1Response struct {
	ContentType string
	StatusCode  int64
	Pictures    []shared.Picture
}
