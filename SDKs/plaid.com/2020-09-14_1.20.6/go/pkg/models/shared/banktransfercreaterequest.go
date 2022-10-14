package shared

type BankTransferCreateRequest struct {
	AccessToken          string                  `json:"access_token"`
	AccountID            string                  `json:"account_id"`
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
	Secret               *string                 `json:"secret,omitempty"`
	Type                 BankTransferTypeEnum    `json:"type"`
	User                 map[string]interface{}  `json:"user"`
}
