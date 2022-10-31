package operations




type AddTextWatermarkV1RequestBodyColorEnum string

const (
    AddTextWatermarkV1RequestBodyColorEnumRed AddTextWatermarkV1RequestBodyColorEnum = "Red"
AddTextWatermarkV1RequestBodyColorEnumBlue AddTextWatermarkV1RequestBodyColorEnum = "Blue"
AddTextWatermarkV1RequestBodyColorEnumGray AddTextWatermarkV1RequestBodyColorEnum = "Gray"
AddTextWatermarkV1RequestBodyColorEnumBlack AddTextWatermarkV1RequestBodyColorEnum = "Black"
)


type AddTextWatermarkV1RequestBodyFile struct {
    Content []byte `multipartForm:"content"`
    File string `multipartForm:"name=file"`
    
}

type AddTextWatermarkV1RequestBody struct {
    Color *AddTextWatermarkV1RequestBodyColorEnum `multipartForm:"name=color"`
    File AddTextWatermarkV1RequestBodyFile `multipartForm:"file"`
    Line1 string `multipartForm:"name=line_1"`
    Line2 *string `multipartForm:"name=line_2"`
    Line3 *string `multipartForm:"name=line_3"`
    Margin *float32 `multipartForm:"name=margin"`
    Template *int32 `multipartForm:"name=template"`
    Transparency *int32 `multipartForm:"name=transparency"`
    
}

type AddTextWatermarkV1Request struct {
    Request AddTextWatermarkV1RequestBody `request:"mediaType=multipart/form-data"`
    
}

type AddTextWatermarkV14XxApplicationProblemPlusJSON struct {
    Errors map[string]interface{} `json:"errors,omitempty"`
    Status *int64 `json:"status,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type AddTextWatermarkV1Response struct {
    ContentType string 
    StatusCode int64 
    AddTextWatermarkV1200ApplicationPdfBinaryString []byte 
    AddTextWatermarkV14XxApplicationProblemPlusJSONObject *AddTextWatermarkV14XxApplicationProblemPlusJSON 
    
}

