package shared




type SongListBaseContractFeaturedCategoryEnum string

const (
    SongListBaseContractFeaturedCategoryEnumNothing SongListBaseContractFeaturedCategoryEnum = "Nothing"
SongListBaseContractFeaturedCategoryEnumConcerts SongListBaseContractFeaturedCategoryEnum = "Concerts"
SongListBaseContractFeaturedCategoryEnumVocaloidRanking SongListBaseContractFeaturedCategoryEnum = "VocaloidRanking"
SongListBaseContractFeaturedCategoryEnumPools SongListBaseContractFeaturedCategoryEnum = "Pools"
SongListBaseContractFeaturedCategoryEnumOther SongListBaseContractFeaturedCategoryEnum = "Other"
)


type SongListBaseContract struct {
    FeaturedCategory *SongListBaseContractFeaturedCategoryEnum `json:"featuredCategory,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

