package operations



type AllTaxRatesQueryParams struct {
    ProductCode *string `queryParam:"style=form,explode=true,name=Product_code"`
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Domain *string `queryParam:"style=form,explode=true,name=domain"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    
}

type AllTaxRatesRequest struct {
    QueryParams AllTaxRatesQueryParams 
    
}

type AllTaxRates200ApplicationJSONRates struct {
    DataName *string `json:"data_name,omitempty"`
    DataValue *string `json:"data_value,omitempty"`
    ProductCode *string `json:"product_code,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type AllTaxRates200ApplicationJSON struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Rates []AllTaxRates200ApplicationJSONRates `json:"rates,omitempty"`
    State *string `json:"state,omitempty"`
    Zip *string `json:"zip,omitempty"`
    
}

type AllTaxRates500ApplicationJSON struct {
    Code *string `json:"code,omitempty"`
    Fields *string `json:"fields,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type AllTaxRatesResponse struct {
    ContentType string 
    StatusCode int64 
    AllTaxRates200ApplicationJSONObjects []AllTaxRates200ApplicationJSON 
    AllTaxRates500ApplicationJSONObject *AllTaxRates500ApplicationJSON 
    
}

