package shared

import (
"time")


type RatedSongForUserForAPIContractRatingEnum string

const (
    RatedSongForUserForAPIContractRatingEnumNothing RatedSongForUserForAPIContractRatingEnum = "Nothing"
RatedSongForUserForAPIContractRatingEnumDislike RatedSongForUserForAPIContractRatingEnum = "Dislike"
RatedSongForUserForAPIContractRatingEnumLike RatedSongForUserForAPIContractRatingEnum = "Like"
RatedSongForUserForAPIContractRatingEnumFavorite RatedSongForUserForAPIContractRatingEnum = "Favorite"
)


type RatedSongForUserForAPIContract struct {
    Date *time.Time `json:"date,omitempty"`
    Rating *RatedSongForUserForAPIContractRatingEnum `json:"rating,omitempty"`
    Song *SongForAPIContract `json:"song,omitempty"`
    User *UserForAPIContract `json:"user,omitempty"`
    
}

