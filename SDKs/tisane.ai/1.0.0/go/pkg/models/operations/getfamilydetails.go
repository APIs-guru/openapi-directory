package operations

type GetFamilyDetailsQueryParams struct {
	ID *string `queryParam:"style=form,explode=true,name=id"`
}

type GetFamilyDetails200ApplicationJSON struct {
	Definition  *string     `json:"definition,omitempty"`
	Description *string     `json:"description,omitempty"`
	Hypernyms   [][]float64 `json:"hypernyms,omitempty"`
	PermID      *string     `json:"permId,omitempty"`
	RequestID   *string     `json:"requestId,omitempty"`
	Wikidata    *string     `json:"wikidata,omitempty"`
	Wordnet30   *string     `json:"wordnet30,omitempty"`
}

type GetFamilyDetailsRequest struct {
	QueryParams GetFamilyDetailsQueryParams
}

type GetFamilyDetailsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetFamilyDetails200ApplicationJSONObject *GetFamilyDetails200ApplicationJSON
}
