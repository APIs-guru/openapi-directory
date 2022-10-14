package operations

type ListWordSensesQueryParams struct {
	Language *string `queryParam:"style=form,explode=true,name=language"`
	Word     *string `queryParam:"style=form,explode=true,name=word"`
}

type ListWordSensesRequest struct {
	QueryParams ListWordSensesQueryParams
}

type ListWordSenses200ApplicationJSONFamilies struct {
	Key        *float64               `json:"Key,omitempty"`
	Value      map[string]interface{} `json:"Value,omitempty"`
	Definition *string                `json:"definition,omitempty"`
}

type ListWordSenses200ApplicationJSONFeatures struct {
	Index *float64 `json:"index,omitempty"`
	Value *string  `json:"value,omitempty"`
}

type ListWordSenses200ApplicationJSON struct {
	Families    []ListWordSenses200ApplicationJSONFamilies `json:"families,omitempty"`
	Features    []ListWordSenses200ApplicationJSONFeatures `json:"features,omitempty"`
	Frequency   *float64                                   `json:"frequency,omitempty"`
	IsLemma     *bool                                      `json:"isLemma,omitempty"`
	LegacyMapID *float64                                   `json:"legacyMapId,omitempty"`
	Lemma       *string                                    `json:"lemma,omitempty"`
	LexemeID    *float64                                   `json:"lexemeId,omitempty"`
}

type ListWordSensesResponse struct {
	ContentType                             string
	StatusCode                              int64
	ListWordSenses200ApplicationJSONObjects []ListWordSenses200ApplicationJSON
}
