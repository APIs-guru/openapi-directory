package shared




type SongRatingContractRatingEnum string

const (
    SongRatingContractRatingEnumNothing SongRatingContractRatingEnum = "Nothing"
SongRatingContractRatingEnumDislike SongRatingContractRatingEnum = "Dislike"
SongRatingContractRatingEnumLike SongRatingContractRatingEnum = "Like"
SongRatingContractRatingEnumFavorite SongRatingContractRatingEnum = "Favorite"
)


type SongRatingContract struct {
    Rating *SongRatingContractRatingEnum `json:"rating,omitempty" form:"name=rating"`
    
}

