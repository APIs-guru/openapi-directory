package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPITextLoremIpsumQueryParams struct {
	LoremType shared.LoremTypeEnum `queryParam:"style=form,explode=true,name=loremType"`
	Number    int32                `queryParam:"style=form,explode=true,name=number"`
	Type      shared.TextTypeEnum  `queryParam:"style=form,explode=true,name=type"`
}

type GetAPITextLoremIpsumHeaders struct {
	XAPIKey *string `header:"name=X-Api-Key"`
}

type GetAPITextLoremIpsumRequest struct {
	QueryParams GetAPITextLoremIpsumQueryParams
	Headers     GetAPITextLoremIpsumHeaders
}

type GetAPITextLoremIpsumResponse struct {
	ContentType string
	StatusCode  int64
}
