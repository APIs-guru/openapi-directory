package operations

type SvgconvertRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type SvgconvertRequestBodyFileToConvert struct {
	File *SvgconvertRequestBodyFile `multipartForm:"file"`
}

type SvgconvertRequest struct {
	Request SvgconvertRequestBodyFileToConvert `request:"mediaType=multipart/form-data"`
}

type Svgconvert200ApplicationJSONFileURL struct {
	BlobName *string `json:"blob_name,omitempty"`
	BlobURL  *string `json:"blob_url,omitempty"`
}

type SvgconvertResponse struct {
	ContentType string
	FileURL     *Svgconvert200ApplicationJSONFileURL
	StatusCode  int64
}
