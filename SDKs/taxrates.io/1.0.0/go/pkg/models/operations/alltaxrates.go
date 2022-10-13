package operations

type AllTaxRatesQueryParams struct {
	ProductCode *string `queryParam:"style=form,explode=true,name=Product_code"`
	Cursor      *string `queryParam:"style=form,explode=true,name=cursor"`
	Domain      *string `queryParam:"style=form,explode=true,name=domain"`
	Filter      *string `queryParam:"style=form,explode=true,name=filter"`
}

type AllTaxRatesRequest struct {
	QueryParams AllTaxRatesQueryParams
}

type AllTaxRates200ApplicationJSONRates struct {
	DataName    *string `json:"data_name"`
	DataValue   *string `json:"data_value"`
	ProductCode *string `json:"product_code"`
	Type        *string `json:"type"`
}

type AllTaxRates200ApplicationJSON struct {
	ID    *string                              `json:"id"`
	Name  *string                              `json:"name"`
	Rates []AllTaxRates200ApplicationJSONRates `json:"rates"`
	State *string                              `json:"state"`
	Zip   *string                              `json:"zip"`
}

type AllTaxRates500ApplicationJSON struct {
	Code    *string `json:"code"`
	Fields  *string `json:"fields"`
	Message *string `json:"message"`
}

type AllTaxRatesResponse struct {
	ContentType                          string
	StatusCode                           int64
	AllTaxRates200ApplicationJSONObjects []AllTaxRates200ApplicationJSON
	AllTaxRates500ApplicationJSONObject  *AllTaxRates500ApplicationJSON
}
