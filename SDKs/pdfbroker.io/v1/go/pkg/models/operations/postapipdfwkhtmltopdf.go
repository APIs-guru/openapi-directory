package operations

import (
"openapi/pkg/models/shared")

type PostAPIPdfWkhtmltopdfRequest struct {
    Request *shared.WkHTMLToPdfRequestDto `request:"mediaType=application/json"`
    
}

type PostAPIPdfWkhtmltopdfResponse struct {
    ContentType string 
    ErrorResponseDto *shared.ErrorResponseDto 
    PostAPIPdfWkhtmltopdf200ApplicationPdfBinaryString []byte 
    PdfResponseDto *shared.PdfResponseDto 
    StatusCode int64 
    
}

