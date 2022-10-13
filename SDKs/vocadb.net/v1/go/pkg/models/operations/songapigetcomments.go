package operations

import (
	"openapi/pkg/models/shared"
)

type SongAPIGetCommentsPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type SongAPIGetCommentsRequest struct {
	PathParams SongAPIGetCommentsPathParams
}

type SongAPIGetCommentsResponse struct {
	Body                   []byte
	CommentForAPIContracts []shared.CommentForAPIContract
	ContentType            string
	StatusCode             int64
}
