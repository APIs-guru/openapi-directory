package shared

type AccountStatusEnum string

const (
	AccountStatusEnumPending  AccountStatusEnum = "PENDING"
	AccountStatusEnumActive   AccountStatusEnum = "ACTIVE"
	AccountStatusEnumDeleted  AccountStatusEnum = "DELETED"
	AccountStatusEnumArchived AccountStatusEnum = "ARCHIVED"
)

type AccountUcisHealth struct {
	Message *string `json:"message"`
	Status  *string `json:"status"`
}

type AccountUcis struct {
	Health       *AccountUcisHealth `json:"health"`
	ID           *int64             `json:"id"`
	Type         *string            `json:"type"`
	UcpAccountID *string            `json:"ucpAccountId"`
	UcpLabel     *string            `json:"ucpLabel"`
}

type Account struct {
	ID     *int64             `json:"id"`
	Name   *string            `json:"name"`
	Org    *string            `json:"org"`
	Status *AccountStatusEnum `json:"status"`
	Ucis   []AccountUcis      `json:"ucis"`
}
