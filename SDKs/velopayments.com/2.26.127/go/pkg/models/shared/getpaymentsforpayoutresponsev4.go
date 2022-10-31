package shared



type GetPaymentsForPayoutResponseV4 struct {
    Content []PaymentResponseV4 `json:"content,omitempty"`
    Links []interface{} `json:"links,omitempty"`
    Page *interface{} `json:"page,omitempty"`
    Summary *interface{} `json:"summary,omitempty"`
    
}

