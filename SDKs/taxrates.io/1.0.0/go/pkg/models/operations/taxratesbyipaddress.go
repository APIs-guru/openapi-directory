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
	Country   *string `json:"Country"`
	Type      *string `json:"Type"`
	DataName  *string `json:"data_name"`
	DataValue *string `json:"data_value"`
}

type TaxRatesByIPAddress200ApplicationJSON struct {
	CountryName *string                                      `json:"country_name"`
	Taxes       []TaxRatesByIPAddress200ApplicationJSONTaxes `json:"taxes"`
}

type TaxRatesByIPAddress500ApplicationJSON struct {
	Code    *string `json:"code"`
	Fields  *string `json:"fields"`
	Message *string `json:"message"`
}

type TaxRatesByIPAddressResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	TaxRatesByIPAddress200ApplicationJSONObjects []TaxRatesByIPAddress200ApplicationJSON
	TaxRatesByIPAddress500ApplicationJSONObject  *TaxRatesByIPAddress500ApplicationJSON
}
