package shared



type APIException struct {
    InnerException *interface{} `json:"InnerException,omitempty"`
    Message *string `json:"Message,omitempty"`
    Source *string `json:"Source,omitempty"`
    StackTrace *string `json:"StackTrace,omitempty"`
    CustomError *interface{} `json:"customError,omitempty"`
    Errors []ValidationError `json:"errors,omitempty"`
    IsCustomErrorObject *bool `json:"isCustomErrorObject,omitempty"`
    IsModelValidatonError *bool `json:"isModelValidatonError,omitempty"`
    ReferenceDocumentLink *string `json:"referenceDocumentLink,omitempty"`
    ReferenceErrorCode *string `json:"referenceErrorCode,omitempty"`
    StatusCode *int32 `json:"statusCode,omitempty"`
    
}

