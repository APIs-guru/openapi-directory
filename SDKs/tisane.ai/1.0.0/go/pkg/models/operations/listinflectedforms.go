package operations

type ListInflectedFormsQueryParams struct {
	Family   *string `queryParam:"style=form,explode=true,name=family"`
	Language *string `queryParam:"style=form,explode=true,name=language"`
	Lexeme   *string `queryParam:"style=form,explode=true,name=lexeme"`
}

type ListInflectedFormsRequest struct {
	QueryParams ListInflectedFormsQueryParams
}

type ListInflectedForms200ApplicationJSONFeatures struct {
	Index *float64 `json:"index"`
	Value *string  `json:"value"`
}

type ListInflectedForms200ApplicationJSON struct {
	Features []ListInflectedForms200ApplicationJSONFeatures `json:"features"`
	IsLemma  *bool                                          `json:"isLemma"`
	Text     *string                                        `json:"text"`
}

type ListInflectedFormsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ListInflectedForms200ApplicationJSONObjects []ListInflectedForms200ApplicationJSON
}
