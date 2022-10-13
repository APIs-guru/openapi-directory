package shared

import (
	"time"
)

type RatedSongForUserForAPIContractRatingEnum string

const (
	RatedSongForUserForAPIContractRatingEnumNothing  RatedSongForUserForAPIContractRatingEnum = "Nothing"
	RatedSongForUserForAPIContractRatingEnumDislike  RatedSongForUserForAPIContractRatingEnum = "Dislike"
	RatedSongForUserForAPIContractRatingEnumLike     RatedSongForUserForAPIContractRatingEnum = "Like"
	RatedSongForUserForAPIContractRatingEnumFavorite RatedSongForUserForAPIContractRatingEnum = "Favorite"
)

type RatedSongForUserForAPIContract struct {
	Date   *time.Time                                `json:"date"`
	Rating *RatedSongForUserForAPIContractRatingEnum `json:"rating"`
	Song   *SongForAPIContract                       `json:"song"`
	User   *UserForAPIContract                       `json:"user"`
}
