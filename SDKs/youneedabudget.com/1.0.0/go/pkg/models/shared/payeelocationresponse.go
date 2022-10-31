package shared



type PayeeLocationResponseData struct {
    PayeeLocation PayeeLocation `json:"payee_location"`
    
}

type PayeeLocationResponse struct {
    Data PayeeLocationResponseData `json:"data"`
    
}

