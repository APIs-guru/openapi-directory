package operations



type ChangeEmailRequestBody struct {
    Address string `multipartForm:"name=address"`
    
}

type ChangeEmailRequest struct {
    Request ChangeEmailRequestBody `request:"mediaType=multipart/form-data"`
    
}

type ChangeEmailResponse struct {
    ContentType string 
    StatusCode int64 
    
}

