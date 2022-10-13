package operations

import (
	"openapi/pkg/models/shared"
)

type SongAPIGetLyricsPathParams struct {
	LyricsID int32 `pathParam:"style=simple,explode=false,name=lyricsId"`
}

type SongAPIGetLyricsRequest struct {
	PathParams SongAPIGetLyricsPathParams
}

type SongAPIGetLyricsResponse struct {
	Body                  []byte
	ContentType           string
	LyricsForSongContract *shared.LyricsForSongContract
	StatusCode            int64
}
