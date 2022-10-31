package shared



type BankAccount struct {
    AccountNumberSuffix string `json:"account_number_suffix"`
    AccountType string `json:"account_type"`
    BankName *string `json:"bank_name,omitempty"`
    Country string `json:"country"`
    Creditable bool `json:"creditable"`
    Currency string `json:"currency"`
    DebitMandateReferenceID *string `json:"debit_mandate_reference_id,omitempty"`
    Debitable bool `json:"debitable"`
    Fingerprint *string `json:"fingerprint,omitempty"`
    HolderName string `json:"holder_name"`
    ID string `json:"id"`
    LocationID *string `json:"location_id,omitempty"`
    PrimaryBankIdentificationNumber string `json:"primary_bank_identification_number"`
    ReferenceID *string `json:"reference_id,omitempty"`
    SecondaryBankIdentificationNumber *string `json:"secondary_bank_identification_number,omitempty"`
    Status string `json:"status"`
    Version *int64 `json:"version,omitempty"`
    
}

