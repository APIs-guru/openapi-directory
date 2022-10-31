package shared



type ListAccountsResponseLinks struct {
    Next string `json:"next"`
    Prev string `json:"prev"`
    
}

type ListAccountsResponse struct {
    Data []AccountResource `json:"data"`
    Links ListAccountsResponseLinks `json:"links"`
    
}

