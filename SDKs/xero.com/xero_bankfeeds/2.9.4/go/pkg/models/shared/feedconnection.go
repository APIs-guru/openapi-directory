package shared




type FeedConnectionStatusEnum string

const (
    FeedConnectionStatusEnumPending FeedConnectionStatusEnum = "PENDING"
FeedConnectionStatusEnumRejected FeedConnectionStatusEnum = "REJECTED"
)


type FeedConnection struct {
    AccountID *string `json:"accountId,omitempty"`
    AccountName *string `json:"accountName,omitempty"`
    AccountNumber *string `json:"accountNumber,omitempty"`
    AccountToken *string `json:"accountToken,omitempty"`
    AccountType *interface{} `json:"accountType,omitempty"`
    Country *CountryCodeEnum `json:"country,omitempty"`
    Currency *CurrencyCodeEnum `json:"currency,omitempty"`
    Error *Error `json:"error,omitempty"`
    ID *string `json:"id,omitempty"`
    Status *FeedConnectionStatusEnum `json:"status,omitempty"`
    
}

