package operations

import (
	"openapi/pkg/models/shared"
)

type GetLanguagesFilterEnum string

const (
	GetLanguagesFilterEnumTexttracks GetLanguagesFilterEnum = "texttracks"
)

type GetLanguagesQueryParams struct {
	Filter *GetLanguagesFilterEnum `queryParam:"style=form,explode=true,name=filter"`
}

type GetLanguagesRequest struct {
	QueryParams GetLanguagesQueryParams
}

type GetLanguagesResponse struct {
	ContentType string
	StatusCode  int64
	Languages   []shared.Language
}
