package shared

type BankTransferEventSyncRequest struct {
	AfterID  int64   `json:"after_id"`
	ClientID *string `json:"client_id"`
	Count    *int64  `json:"count"`
	Secret   *string `json:"secret"`
}
