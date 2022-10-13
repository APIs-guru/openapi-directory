package operations

type GetFamilyDetailsQueryParams struct {
	ID *string `queryParam:"style=form,explode=true,name=id"`
}

type GetFamilyDetailsRequest struct {
	QueryParams GetFamilyDetailsQueryParams
}

type GetFamilyDetails200ApplicationJSON struct {
	Definition  *string     `json:"definition"`
	Description *string     `json:"description"`
	Hypernyms   [][]float64 `json:"hypernyms"`
	PermID      *string     `json:"permId"`
	RequestID   *string     `json:"requestId"`
	Wikidata    *string     `json:"wikidata"`
	Wordnet30   *string     `json:"wordnet30"`
}

type GetFamilyDetailsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetFamilyDetails200ApplicationJSONObject *GetFamilyDetails200ApplicationJSON
}
