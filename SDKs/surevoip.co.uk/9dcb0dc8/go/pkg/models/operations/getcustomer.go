package operations



type GetCustomerPathParams struct {
    Account int64 `pathParam:"style=simple,explode=false,name=account"`
    
}

type GetCustomerRequest struct {
    PathParams GetCustomerPathParams 
    
}

type GetCustomer200ApplicationJSON struct {
    Address *string `json:"address,omitempty"`
    Balance *int64 `json:"balance,omitempty"`
    City *string `json:"city,omitempty"`
    CompanyName *string `json:"company_name,omitempty"`
    CompanyWebsite *string `json:"company_website,omitempty"`
    Country *string `json:"country,omitempty"`
    Creditlimit *string `json:"creditlimit,omitempty"`
    Email *string `json:"email,omitempty"`
    Fax *string `json:"fax,omitempty"`
    Firstname *string `json:"firstname,omitempty"`
    Lastname *string `json:"lastname,omitempty"`
    Phone *string `json:"phone,omitempty"`
    Postcode *string `json:"postcode,omitempty"`
    State *string `json:"state,omitempty"`
    Username *int64 `json:"username,omitempty"`
    
}

type GetCustomerResponse struct {
    ContentType string 
    StatusCode int64 
    GetCustomer200ApplicationJSONObject *GetCustomer200ApplicationJSON 
    
}

