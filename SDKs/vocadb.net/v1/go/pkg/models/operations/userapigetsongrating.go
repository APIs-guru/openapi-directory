package operations

type UserAPIGetSongRatingPathParams struct {
	ID     int32 `pathParam:"style=simple,explode=false,name=id"`
	SongID int32 `pathParam:"style=simple,explode=false,name=songId"`
}

type UserAPIGetSongRatingRequest struct {
	PathParams UserAPIGetSongRatingPathParams
}

type UserAPIGetSongRating200ApplicationJSONEnum string

const (
	UserAPIGetSongRating200ApplicationJSONEnumNothing  UserAPIGetSongRating200ApplicationJSONEnum = "Nothing"
	UserAPIGetSongRating200ApplicationJSONEnumDislike  UserAPIGetSongRating200ApplicationJSONEnum = "Dislike"
	UserAPIGetSongRating200ApplicationJSONEnumLike     UserAPIGetSongRating200ApplicationJSONEnum = "Like"
	UserAPIGetSongRating200ApplicationJSONEnumFavorite UserAPIGetSongRating200ApplicationJSONEnum = "Favorite"
)

type UserAPIGetSongRating200ApplicationJsonpEnum string

const (
	UserAPIGetSongRating200ApplicationJsonpEnumNothing  UserAPIGetSongRating200ApplicationJsonpEnum = "Nothing"
	UserAPIGetSongRating200ApplicationJsonpEnumDislike  UserAPIGetSongRating200ApplicationJsonpEnum = "Dislike"
	UserAPIGetSongRating200ApplicationJsonpEnumLike     UserAPIGetSongRating200ApplicationJsonpEnum = "Like"
	UserAPIGetSongRating200ApplicationJsonpEnumFavorite UserAPIGetSongRating200ApplicationJsonpEnum = "Favorite"
)

type UserAPIGetSongRating200TextJSONEnum string

const (
	UserAPIGetSongRating200TextJSONEnumNothing  UserAPIGetSongRating200TextJSONEnum = "Nothing"
	UserAPIGetSongRating200TextJSONEnumDislike  UserAPIGetSongRating200TextJSONEnum = "Dislike"
	UserAPIGetSongRating200TextJSONEnumLike     UserAPIGetSongRating200TextJSONEnum = "Like"
	UserAPIGetSongRating200TextJSONEnumFavorite UserAPIGetSongRating200TextJSONEnum = "Favorite"
)

type UserAPIGetSongRatingResponse struct {
	Body                                              []byte
	ContentType                                       string
	StatusCode                                        int64
	UserAPIGetSongRating200ApplicationJSONStringEnum  *UserAPIGetSongRating200ApplicationJSONEnum
	UserAPIGetSongRating200ApplicationJsonpStringEnum *UserAPIGetSongRating200ApplicationJsonpEnum
	UserAPIGetSongRating200TextJSONStringEnum         *UserAPIGetSongRating200TextJSONEnum
}
