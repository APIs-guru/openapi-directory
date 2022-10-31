package operations



type SearchHeaders struct {
    GalaxyApName *string `header:"style=simple,explode=false,name=galaxy-ap-name"`
    GalaxyApPassword *string `header:"style=simple,explode=false,name=galaxy-ap-password"`
    GalaxySearchType *string `header:"style=simple,explode=false,name=galaxy-search-type"`
    
}

type SearchRequestBodyAddress struct {
    AddressLine1 *string `json:"addressLine1,omitempty"`
    AddressLine2 *string `json:"addressLine2,omitempty"`
    
}

type SearchRequestBody struct {
    Address *SearchRequestBodyAddress `json:"Address,omitempty"`
    Age *float64 `json:"Age,omitempty"`
    Dob *string `json:"Dob,omitempty"`
    Email *string `json:"Email,omitempty"`
    FirstName *string `json:"FirstName,omitempty"`
    LastName *string `json:"LastName,omitempty"`
    MiddleName *string `json:"MiddleName,omitempty"`
    PhoneNumber *string `json:"PhoneNumber,omitempty"`
    
}

type SearchRequest struct {
    Headers SearchHeaders 
    Request *SearchRequestBody `request:"mediaType=application/json"`
    
}

type SearchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

