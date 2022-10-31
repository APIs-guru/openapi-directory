package operations

import (
	"openapi/pkg/models/shared"
)

type AlbumAPIGetReviewsPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type AlbumAPIGetReviewsQueryParams struct {
	LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
}

type AlbumAPIGetReviewsRequest struct {
	PathParams  AlbumAPIGetReviewsPathParams
	QueryParams AlbumAPIGetReviewsQueryParams
}

type AlbumAPIGetReviewsResponse struct {
	AlbumReviewContracts []shared.AlbumReviewContract
	Body                 []byte
	ContentType          string
	StatusCode           int64
}
