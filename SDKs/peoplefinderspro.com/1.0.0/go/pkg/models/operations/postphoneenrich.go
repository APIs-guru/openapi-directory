package operations



type PostPhoneEnrichHeaders struct {
    GalaxyApName *string `header:"style=simple,explode=false,name=galaxy-ap-name"`
    GalaxyApPassword *string `header:"style=simple,explode=false,name=galaxy-ap-password"`
    GalaxySearchType *string `header:"style=simple,explode=false,name=galaxy-search-type"`
    
}

type PostPhoneEnrichRequestBody struct {
    Phone *string `json:"Phone,omitempty"`
    
}

type PostPhoneEnrichRequest struct {
    Headers PostPhoneEnrichHeaders 
    Request *PostPhoneEnrichRequestBody `request:"mediaType=application/json"`
    
}

type PostPhoneEnrichResponse struct {
    ContentType string 
    StatusCode int64 
    
}

