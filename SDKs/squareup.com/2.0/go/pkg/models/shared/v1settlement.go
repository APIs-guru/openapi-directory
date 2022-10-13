package shared

type V1Settlement struct {
	BankAccountID *string             `json:"bank_account_id"`
	Entries       []V1SettlementEntry `json:"entries"`
	ID            *string             `json:"id"`
	InitiatedAt   *string             `json:"initiated_at"`
	Status        *string             `json:"status"`
	TotalMoney    *V1Money            `json:"total_money"`
}
