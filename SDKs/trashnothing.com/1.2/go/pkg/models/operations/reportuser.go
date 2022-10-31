package operations



type ReportUserRequestBody struct {
    GroupID *string `multipartForm:"name=group_id"`
    Message string `multipartForm:"name=message"`
    Subject string `multipartForm:"name=subject"`
    UserEmail *string `multipartForm:"name=user_email"`
    UserID *string `multipartForm:"name=user_id"`
    
}

type ReportUserRequest struct {
    Request ReportUserRequestBody `request:"mediaType=multipart/form-data"`
    
}

type ReportUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

