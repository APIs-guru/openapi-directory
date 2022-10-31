package operations



type UserAPIGetSongRatingForCurrentPathParams struct {
    SongID int32 `pathParam:"style=simple,explode=false,name=songId"`
    
}

type UserAPIGetSongRatingForCurrentRequest struct {
    PathParams UserAPIGetSongRatingForCurrentPathParams 
    
}


type UserAPIGetSongRatingForCurrent200ApplicationJSONEnum string

const (
    UserAPIGetSongRatingForCurrent200ApplicationJSONEnumNothing UserAPIGetSongRatingForCurrent200ApplicationJSONEnum = "Nothing"
UserAPIGetSongRatingForCurrent200ApplicationJSONEnumDislike UserAPIGetSongRatingForCurrent200ApplicationJSONEnum = "Dislike"
UserAPIGetSongRatingForCurrent200ApplicationJSONEnumLike UserAPIGetSongRatingForCurrent200ApplicationJSONEnum = "Like"
UserAPIGetSongRatingForCurrent200ApplicationJSONEnumFavorite UserAPIGetSongRatingForCurrent200ApplicationJSONEnum = "Favorite"
)



type UserAPIGetSongRatingForCurrent200ApplicationJsonpEnum string

const (
    UserAPIGetSongRatingForCurrent200ApplicationJsonpEnumNothing UserAPIGetSongRatingForCurrent200ApplicationJsonpEnum = "Nothing"
UserAPIGetSongRatingForCurrent200ApplicationJsonpEnumDislike UserAPIGetSongRatingForCurrent200ApplicationJsonpEnum = "Dislike"
UserAPIGetSongRatingForCurrent200ApplicationJsonpEnumLike UserAPIGetSongRatingForCurrent200ApplicationJsonpEnum = "Like"
UserAPIGetSongRatingForCurrent200ApplicationJsonpEnumFavorite UserAPIGetSongRatingForCurrent200ApplicationJsonpEnum = "Favorite"
)



type UserAPIGetSongRatingForCurrent200TextJSONEnum string

const (
    UserAPIGetSongRatingForCurrent200TextJSONEnumNothing UserAPIGetSongRatingForCurrent200TextJSONEnum = "Nothing"
UserAPIGetSongRatingForCurrent200TextJSONEnumDislike UserAPIGetSongRatingForCurrent200TextJSONEnum = "Dislike"
UserAPIGetSongRatingForCurrent200TextJSONEnumLike UserAPIGetSongRatingForCurrent200TextJSONEnum = "Like"
UserAPIGetSongRatingForCurrent200TextJSONEnumFavorite UserAPIGetSongRatingForCurrent200TextJSONEnum = "Favorite"
)


type UserAPIGetSongRatingForCurrentResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    UserAPIGetSongRatingForCurrent200ApplicationJSONStringEnum *UserAPIGetSongRatingForCurrent200ApplicationJSONEnum 
    UserAPIGetSongRatingForCurrent200ApplicationJsonpStringEnum *UserAPIGetSongRatingForCurrent200ApplicationJsonpEnum 
    UserAPIGetSongRatingForCurrent200TextJSONStringEnum *UserAPIGetSongRatingForCurrent200TextJSONEnum 
    
}

