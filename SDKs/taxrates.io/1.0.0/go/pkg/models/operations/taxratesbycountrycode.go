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
	Country   *string `json:"Country"`
	Type      *string `json:"Type"`
	DataName  *string `json:"data_name"`
	DataValue *string `json:"data_value"`
}

type TaxRatesByCountryCode200ApplicationJSON struct {
	CountryName *string                                        `json:"country_name"`
	Taxes       []TaxRatesByCountryCode200ApplicationJSONTaxes `json:"taxes"`
}

type TaxRatesByCountryCode500ApplicationJSON struct {
	Code    *string `json:"code"`
	Fields  *string `json:"fields"`
	Message *string `json:"message"`
}

type TaxRatesByCountryCodeResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	TaxRatesByCountryCode200ApplicationJSONObject *TaxRatesByCountryCode200ApplicationJSON
	TaxRatesByCountryCode500ApplicationJSONObject *TaxRatesByCountryCode500ApplicationJSON
}
