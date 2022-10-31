package shared



type CardPaymentDetails struct {
    ApplicationCryptogram *string `json:"application_cryptogram,omitempty"`
    ApplicationIdentifier *string `json:"application_identifier,omitempty"`
    ApplicationName *string `json:"application_name,omitempty"`
    AuthResultCode *string `json:"auth_result_code,omitempty"`
    AvsStatus *string `json:"avs_status,omitempty"`
    Card *Card `json:"card,omitempty"`
    CardPaymentTimeline *CardPaymentTimeline `json:"card_payment_timeline,omitempty"`
    CvvStatus *string `json:"cvv_status,omitempty"`
    DeviceDetails *DeviceDetails `json:"device_details,omitempty"`
    EntryMethod *string `json:"entry_method,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    RefundRequiresCardPresence *bool `json:"refund_requires_card_presence,omitempty"`
    StatementDescription *string `json:"statement_description,omitempty"`
    Status *string `json:"status,omitempty"`
    VerificationMethod *string `json:"verification_method,omitempty"`
    VerificationResults *string `json:"verification_results,omitempty"`
    
}

