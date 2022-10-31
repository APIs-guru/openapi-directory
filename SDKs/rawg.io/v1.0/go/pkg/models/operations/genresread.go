package operations

import (
	"openapi/pkg/models/shared"
)

type GenresReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GenresReadRequest struct {
	PathParams GenresReadPathParams
}

type GenresReadResponse struct {
	ContentType string
	GenreSingle *shared.GenreSingle
	StatusCode  int64
}
