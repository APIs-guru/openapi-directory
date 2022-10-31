package shared



type PayeeLocation struct {
    Deleted bool `json:"deleted"`
    ID string `json:"id"`
    Latitude string `json:"latitude"`
    Longitude string `json:"longitude"`
    PayeeID string `json:"payee_id"`
    
}

