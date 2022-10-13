package operations

type GetCustomerPathParams struct {
	Account int64 `pathParam:"style=simple,explode=false,name=account"`
}

type GetCustomerRequest struct {
	PathParams GetCustomerPathParams
}

type GetCustomer200ApplicationJSON struct {
	Address        *string `json:"address"`
	Balance        *int64  `json:"balance"`
	City           *string `json:"city"`
	CompanyName    *string `json:"company_name"`
	CompanyWebsite *string `json:"company_website"`
	Country        *string `json:"country"`
	Creditlimit    *string `json:"creditlimit"`
	Email          *string `json:"email"`
	Fax            *string `json:"fax"`
	Firstname      *string `json:"firstname"`
	Lastname       *string `json:"lastname"`
	Phone          *string `json:"phone"`
	Postcode       *string `json:"postcode"`
	State          *string `json:"state"`
	Username       *int64  `json:"username"`
}

type GetCustomerResponse struct {
	ContentType                         string
	StatusCode                          int64
	GetCustomer200ApplicationJSONObject *GetCustomer200ApplicationJSON
}
