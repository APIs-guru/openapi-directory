package operations



type SvgconvertFileToConvertFile struct {
    Content []byte `multipartForm:"content"`
    File string `multipartForm:"name=file"`
    
}

type SvgconvertFileToConvert struct {
    File *SvgconvertFileToConvertFile `multipartForm:"file"`
    
}

type SvgconvertRequest struct {
    Request SvgconvertFileToConvert `request:"mediaType=multipart/form-data"`
    
}

type SvgconvertFileURL struct {
    BlobName *string `json:"blob_name,omitempty"`
    BlobURL *string `json:"blob_url,omitempty"`
    
}

type SvgconvertResponse struct {
    ContentType string 
    FileURL *SvgconvertFileURL 
    StatusCode int64 
    
}

