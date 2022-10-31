package operations

import (
"openapi/pkg/models/shared")

type IncomeVerificationDocumentsDownloadRequest struct {
    Request shared.IncomeVerificationDocumentsDownloadRequest `request:"mediaType=application/json"`
    
}

type IncomeVerificationDocumentsDownloadResponse struct {
    ContentType string 
    StatusCode int64 
    IncomeVerificationDocumentsDownload200ApplicationZipBinaryString []byte 
    
}

