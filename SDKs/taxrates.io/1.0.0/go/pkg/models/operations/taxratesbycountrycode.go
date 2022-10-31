package operations

type TaxRatesByCountryCodeQueryParams struct {
	CountryCode  *string `queryParam:"style=form,explode=true,name=country_code"`
	Date         *string `queryParam:"style=form,explode=true,name=date"`
	Domain       *string `queryParam:"style=form,explode=true,name=domain"`
	Filter       *string `queryParam:"style=form,explode=true,name=filter"`
	ProductCodes *string `queryParam:"style=form,explode=true,name=product_codes[]"`
	Province     *string `queryParam:"style=form,explode=true,name=province "`
	Zip          *string `queryParam:"style=form,explode=true,name=zip"`
}

type TaxRatesByCountryCodeRequest struct {
	QueryParams TaxRatesByCountryCodeQueryParams
}

type TaxRatesByCountryCode200ApplicationJSONTaxes struct {
	Country   *string `json:"Country,omitempty"`
	Type      *string `json:"Type,omitempty"`
	DataName  *string `json:"data_name,omitempty"`
	DataValue *string `json:"data_value,omitempty"`
}

type TaxRatesByCountryCode200ApplicationJSON struct {
	CountryName *string                                        `json:"country_name,omitempty"`
	Taxes       []TaxRatesByCountryCode200ApplicationJSONTaxes `json:"taxes,omitempty"`
}

type TaxRatesByCountryCode500ApplicationJSON struct {
	Code    *string `json:"code,omitempty"`
	Fields  *string `json:"fields,omitempty"`
	Message *string `json:"message,omitempty"`
}

type TaxRatesByCountryCodeResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	TaxRatesByCountryCode200ApplicationJSONObject *TaxRatesByCountryCode200ApplicationJSON
	TaxRatesByCountryCode500ApplicationJSONObject *TaxRatesByCountryCode500ApplicationJSON
}
