package shared

type ProcessorBankTransferCreateRequest struct {
	AchClass             *AchClassEnum           `json:"ach_class"`
	Amount               string                  `json:"amount"`
	ClientID             *string                 `json:"client_id"`
	CustomTag            *string                 `json:"custom_tag"`
	Description          string                  `json:"description"`
	IdempotencyKey       string                  `json:"idempotency_key"`
	IsoCurrencyCode      string                  `json:"iso_currency_code"`
	Metadata             map[string]string       `json:"metadata"`
	Network              BankTransferNetworkEnum `json:"network"`
	OriginationAccountID *string                 `json:"origination_account_id"`
	ProcessorToken       string                  `json:"processor_token"`
	Secret               *string                 `json:"secret"`
	Type                 BankTransferTypeEnum    `json:"type"`
	User                 map[string]interface{}  `json:"user"`
}
