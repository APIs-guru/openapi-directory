package shared

type SongListBaseContractFeaturedCategoryEnum string

const (
	SongListBaseContractFeaturedCategoryEnumNothing         SongListBaseContractFeaturedCategoryEnum = "Nothing"
	SongListBaseContractFeaturedCategoryEnumConcerts        SongListBaseContractFeaturedCategoryEnum = "Concerts"
	SongListBaseContractFeaturedCategoryEnumVocaloidRanking SongListBaseContractFeaturedCategoryEnum = "VocaloidRanking"
	SongListBaseContractFeaturedCategoryEnumPools           SongListBaseContractFeaturedCategoryEnum = "Pools"
	SongListBaseContractFeaturedCategoryEnumOther           SongListBaseContractFeaturedCategoryEnum = "Other"
)

type SongListBaseContract struct {
	FeaturedCategory *SongListBaseContractFeaturedCategoryEnum `json:"featuredCategory"`
	ID               *int32                                    `json:"id"`
	Name             *string                                   `json:"name"`
}
