package operations

type SongAPIDeletePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type SongAPIDeleteQueryParams struct {
	Notes *string `queryParam:"style=form,explode=true,name=notes"`
}

type SongAPIDeleteRequest struct {
	PathParams  SongAPIDeletePathParams
	QueryParams SongAPIDeleteQueryParams
}

type SongAPIDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
