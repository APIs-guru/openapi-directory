package shared




type AccountStatusEnum string

const (
    AccountStatusEnumPending AccountStatusEnum = "PENDING"
AccountStatusEnumActive AccountStatusEnum = "ACTIVE"
AccountStatusEnumDeleted AccountStatusEnum = "DELETED"
AccountStatusEnumArchived AccountStatusEnum = "ARCHIVED"
)


type AccountUcisHealth struct {
    Message *string `json:"message,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

type AccountUcis struct {
    Health *AccountUcisHealth `json:"health,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Type *string `json:"type,omitempty"`
    UcpAccountID *string `json:"ucpAccountId,omitempty"`
    UcpLabel *string `json:"ucpLabel,omitempty"`
    
}

type Account struct {
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Org *string `json:"org,omitempty"`
    Status *AccountStatusEnum `json:"status,omitempty"`
    Ucis []AccountUcis `json:"ucis,omitempty"`
    
}

