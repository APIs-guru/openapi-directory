package shared

// ProcessorBankTransferCreateRequest
// ProcessorBankTransferCreateRequest defines the request schema for `/processor/bank_transfer/create`
type ProcessorBankTransferCreateRequest struct {
	AchClass             *AchClassEnum           `json:"ach_class,omitempty"`
	Amount               string                  `json:"amount"`
	ClientID             *string                 `json:"client_id,omitempty"`
	CustomTag            *string                 `json:"custom_tag,omitempty"`
	Description          string                  `json:"description"`
	IdempotencyKey       string                  `json:"idempotency_key"`
	IsoCurrencyCode      string                  `json:"iso_currency_code"`
	Metadata             map[string]string       `json:"metadata,omitempty"`
	Network              BankTransferNetworkEnum `json:"network"`
	OriginationAccountID *string                 `json:"origination_account_id,omitempty"`
	ProcessorToken       string                  `json:"processor_token"`
	Secret               *string                 `json:"secret,omitempty"`
	Type                 BankTransferTypeEnum    `json:"type"`
	User                 map[string]interface{}  `json:"user"`
}
