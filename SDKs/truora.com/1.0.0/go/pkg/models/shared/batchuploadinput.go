package shared



type BatchUploadInputFile struct {
    Content []byte `multipartForm:"content"`
    File string `multipartForm:"name=file"`
    
}

type BatchUploadInput struct {
    File []BatchUploadInputFile `multipartForm:"name=file"`
    
}

