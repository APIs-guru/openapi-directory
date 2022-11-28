package shared

type BatchUploadInputFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

// BatchUploadInput
// Represents the parameters required to perform a batch upload
type BatchUploadInput struct {
	File []BatchUploadInputFile `multipartForm:"name=file"`
}
