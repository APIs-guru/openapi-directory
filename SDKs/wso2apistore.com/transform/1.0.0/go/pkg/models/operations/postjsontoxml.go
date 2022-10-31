package operations



type PostJsontoxmlRequest struct {
    Request string `request:"mediaType=application/json"`
    
}

type PostJsontoxmlResponse struct {
    ContentType string 
    StatusCode int64 
    
}

