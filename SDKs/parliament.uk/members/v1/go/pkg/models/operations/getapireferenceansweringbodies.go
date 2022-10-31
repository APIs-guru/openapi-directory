package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIReferenceAnsweringBodiesQueryParams struct {
	ID           *int32  `queryParam:"style=form,explode=true,name=id"`
	NameContains *string `queryParam:"style=form,explode=true,name=nameContains"`
}

type GetAPIReferenceAnsweringBodiesRequest struct {
	QueryParams GetAPIReferenceAnsweringBodiesQueryParams
}

type GetAPIReferenceAnsweringBodiesResponse struct {
	AnsweringBodies []shared.AnsweringBody
	Body            []byte
	ContentType     string
	StatusCode      int64
}
