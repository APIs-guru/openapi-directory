package operations

type AlbumAPIDeletePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type AlbumAPIDeleteQueryParams struct {
	Notes *string `queryParam:"style=form,explode=true,name=notes"`
}

type AlbumAPIDeleteRequest struct {
	PathParams  AlbumAPIDeletePathParams
	QueryParams AlbumAPIDeleteQueryParams
}

type AlbumAPIDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
