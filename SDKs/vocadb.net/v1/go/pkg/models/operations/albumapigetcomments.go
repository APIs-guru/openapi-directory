package operations

import (
	"openapi/pkg/models/shared"
)

type AlbumAPIGetCommentsPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type AlbumAPIGetCommentsRequest struct {
	PathParams AlbumAPIGetCommentsPathParams
}

type AlbumAPIGetCommentsResponse struct {
	Body                   []byte
	CommentForAPIContracts []shared.CommentForAPIContract
	ContentType            string
	StatusCode             int64
}
