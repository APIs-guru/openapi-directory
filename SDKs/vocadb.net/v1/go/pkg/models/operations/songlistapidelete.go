package operations

type SongListAPIDeletePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type SongListAPIDeleteQueryParams struct {
	HardDelete *bool   `queryParam:"style=form,explode=true,name=hardDelete"`
	Notes      *string `queryParam:"style=form,explode=true,name=notes"`
}

type SongListAPIDeleteRequest struct {
	PathParams  SongListAPIDeletePathParams
	QueryParams SongListAPIDeleteQueryParams
}

type SongListAPIDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
