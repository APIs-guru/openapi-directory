package operations

import (
	"openapi/pkg/models/shared"
)

type GetPicturesPathParams struct {
	UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetPicturesQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetPicturesRequest struct {
	PathParams  GetPicturesPathParams
	QueryParams GetPicturesQueryParams
}

type GetPicturesResponse struct {
	ContentType string
	StatusCode  int64
	Pictures    []shared.Picture
}
