package operations

type ListWordSensesQueryParams struct {
	Language *string `queryParam:"style=form,explode=true,name=language"`
	Word     *string `queryParam:"style=form,explode=true,name=word"`
}

type ListWordSensesRequest struct {
	QueryParams ListWordSensesQueryParams
}

type ListWordSenses200ApplicationJSONFamilies struct {
	Key        *float64               `json:"Key"`
	Value      map[string]interface{} `json:"Value"`
	Definition *string                `json:"definition"`
}

type ListWordSenses200ApplicationJSONFeatures struct {
	Index *float64 `json:"index"`
	Value *string  `json:"value"`
}

type ListWordSenses200ApplicationJSON struct {
	Families    []ListWordSenses200ApplicationJSONFamilies `json:"families"`
	Features    []ListWordSenses200ApplicationJSONFeatures `json:"features"`
	Frequency   *float64                                   `json:"frequency"`
	IsLemma     *bool                                      `json:"isLemma"`
	LegacyMapID *float64                                   `json:"legacyMapId"`
	Lemma       *string                                    `json:"lemma"`
	LexemeID    *float64                                   `json:"lexemeId"`
}

type ListWordSensesResponse struct {
	ContentType                             string
	StatusCode                              int64
	ListWordSenses200ApplicationJSONObjects []ListWordSenses200ApplicationJSON
}
