package shared



type ContactUploadResponseData struct {
    Contacts []Contact `json:"contacts,omitempty"`
    Errors []Contact `json:"errors,omitempty"`
    Inserted *int64 `json:"inserted,omitempty"`
    Submitted *int64 `json:"submitted,omitempty"`
    Success *int64 `json:"success,omitempty"`
    Updated *int64 `json:"updated,omitempty"`
    
}

type ContactUploadResponse struct {
    Data *ContactUploadResponseData `json:"data,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

