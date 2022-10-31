package shared



type BulkResponseDataBulk struct {
    DuplicateImportIds []string `json:"duplicate_import_ids"`
    TransactionIds []string `json:"transaction_ids"`
    
}

type BulkResponseData struct {
    Bulk BulkResponseDataBulk `json:"bulk"`
    
}

type BulkResponse struct {
    Data BulkResponseData `json:"data"`
    
}

