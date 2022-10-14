package operations

type TaxRatesByIPAddressQueryParams struct {
	Domain      *string `queryParam:"style=form,explode=true,name=domain"`
	Filter      *string `queryParam:"style=form,explode=true,name=filter"`
	IP          *string `queryParam:"style=form,explode=true,name=ip"`
	ProductCode *string `queryParam:"style=form,explode=true,name=product_code"`
	Zip         *string `queryParam:"style=form,explode=true,name=zip"`
}

type TaxRatesByIPAddressRequest struct {
	QueryParams TaxRatesByIPAddressQueryParams
}

type TaxRatesByIPAddress200ApplicationJSONTaxes struct {
	Country   *string `json:"Country,omitempty"`
	Type      *string `json:"Type,omitempty"`
	DataName  *string `json:"data_name,omitempty"`
	DataValue *string `json:"data_value,omitempty"`
}

type TaxRatesByIPAddress200ApplicationJSON struct {
	CountryName *string                                      `json:"country_name,omitempty"`
	Taxes       []TaxRatesByIPAddress200ApplicationJSONTaxes `json:"taxes,omitempty"`
}

type TaxRatesByIPAddress500ApplicationJSON struct {
	Code    *string `json:"code,omitempty"`
	Fields  *string `json:"fields,omitempty"`
	Message *string `json:"message,omitempty"`
}

type TaxRatesByIPAddressResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	TaxRatesByIPAddress200ApplicationJSONObjects []TaxRatesByIPAddress200ApplicationJSON
	TaxRatesByIPAddress500ApplicationJSONObject  *TaxRatesByIPAddress500ApplicationJSON
}
