package operations



type GeneratePartialYaraRuleRequest struct {
    Request interface{} `request:"mediaType=multipart/form-data"`
    
}

type GeneratePartialYaraRuleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

