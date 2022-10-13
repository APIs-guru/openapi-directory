package operations

type AlbumAPIGetTracksFieldsPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type AlbumAPIGetTracksFieldsLangEnum string

const (
	AlbumAPIGetTracksFieldsLangEnumDefault  AlbumAPIGetTracksFieldsLangEnum = "Default"
	AlbumAPIGetTracksFieldsLangEnumJapanese AlbumAPIGetTracksFieldsLangEnum = "Japanese"
	AlbumAPIGetTracksFieldsLangEnumRomaji   AlbumAPIGetTracksFieldsLangEnum = "Romaji"
	AlbumAPIGetTracksFieldsLangEnumEnglish  AlbumAPIGetTracksFieldsLangEnum = "English"
)

type AlbumAPIGetTracksFieldsQueryParams struct {
	DiscNumber *int32                           `queryParam:"style=form,explode=true,name=discNumber"`
	Field      []string                         `queryParam:"style=form,explode=true,name=field"`
	Lang       *AlbumAPIGetTracksFieldsLangEnum `queryParam:"style=form,explode=true,name=lang"`
}

type AlbumAPIGetTracksFieldsRequest struct {
	PathParams  AlbumAPIGetTracksFieldsPathParams
	QueryParams AlbumAPIGetTracksFieldsQueryParams
}

type AlbumAPIGetTracksFieldsResponse struct {
	AlbumAPIGetTracksFields200ApplicationJSONObjects  []map[string]string
	AlbumAPIGetTracksFields200ApplicationJsonpObjects []map[string]string
	AlbumAPIGetTracksFields200TextJSONObjects         []map[string]string
	Body                                              []byte
	ContentType                                       string
	StatusCode                                        int64
}
