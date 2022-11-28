package operations

type ListInflectedFormsQueryParams struct {
	Family   *string `queryParam:"style=form,explode=true,name=family"`
	Language *string `queryParam:"style=form,explode=true,name=language"`
	Lexeme   *string `queryParam:"style=form,explode=true,name=lexeme"`
}

type ListInflectedForms200ApplicationJSONFeatures struct {
	Index *float64 `json:"index,omitempty"`
	Value *string  `json:"value,omitempty"`
}

type ListInflectedForms200ApplicationJSON struct {
	Features []ListInflectedForms200ApplicationJSONFeatures `json:"features,omitempty"`
	IsLemma  *bool                                          `json:"isLemma,omitempty"`
	Text     *string                                        `json:"text,omitempty"`
}

type ListInflectedFormsRequest struct {
	QueryParams ListInflectedFormsQueryParams
}

type ListInflectedFormsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ListInflectedForms200ApplicationJSONObjects []ListInflectedForms200ApplicationJSON
}
