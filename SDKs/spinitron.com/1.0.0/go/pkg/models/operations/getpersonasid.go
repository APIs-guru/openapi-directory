package operations

import (
	"openapi/pkg/models/shared"
)

type GetPersonasIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetPersonasIDQueryParams struct {
	Expand []string `queryParam:"style=form,explode=true,name=expand"`
	Fields []string `queryParam:"style=form,explode=true,name=fields"`
}

type GetPersonasIDRequest struct {
	PathParams  GetPersonasIDPathParams
	QueryParams GetPersonasIDQueryParams
}

type GetPersonasIDResponse struct {
	Body        []byte
	ContentType string
	Error       *shared.Error
	Persona     *shared.Persona
	StatusCode  int64
}
