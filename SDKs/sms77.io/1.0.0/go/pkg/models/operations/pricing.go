package operations



type PricingQueryParams struct {
    Country *string `queryParam:"style=form,explode=true,name=country"`
    Format *string `queryParam:"style=form,explode=true,name=format"`
    
}

type PricingRequest struct {
    QueryParams PricingQueryParams 
    
}

type PricingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

