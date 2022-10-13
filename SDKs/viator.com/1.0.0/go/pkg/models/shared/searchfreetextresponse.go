package shared

type SearchFreetextResponseSearchTypeEnum string

const (
	SearchFreetextResponseSearchTypeEnumProduct        SearchFreetextResponseSearchTypeEnum = "PRODUCT"
	SearchFreetextResponseSearchTypeEnumDestination    SearchFreetextResponseSearchTypeEnum = "DESTINATION"
	SearchFreetextResponseSearchTypeEnumAttraction     SearchFreetextResponseSearchTypeEnum = "ATTRACTION"
	SearchFreetextResponseSearchTypeEnumRecommendation SearchFreetextResponseSearchTypeEnum = "RECOMMENDATION"
)

type SearchFreetextResponse struct {
	SearchType *SearchFreetextResponseSearchTypeEnum `json:"searchType"`
	SortOrder  *int64                                `json:"sortOrder"`
}
