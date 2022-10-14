package shared

type V1Settlement struct {
	BankAccountID *string             `json:"bank_account_id,omitempty"`
	Entries       []V1SettlementEntry `json:"entries,omitempty"`
	ID            *string             `json:"id,omitempty"`
	InitiatedAt   *string             `json:"initiated_at,omitempty"`
	Status        *string             `json:"status,omitempty"`
	TotalMoney    *V1Money            `json:"total_money,omitempty"`
}
