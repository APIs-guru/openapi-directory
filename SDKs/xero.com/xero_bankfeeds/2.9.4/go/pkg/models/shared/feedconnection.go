package shared

type FeedConnectionStatusEnum string

const (
	FeedConnectionStatusEnumPending  FeedConnectionStatusEnum = "PENDING"
	FeedConnectionStatusEnumRejected FeedConnectionStatusEnum = "REJECTED"
)

type FeedConnection struct {
	AccountID     *string                   `json:"accountId"`
	AccountName   *string                   `json:"accountName"`
	AccountNumber *string                   `json:"accountNumber"`
	AccountToken  *string                   `json:"accountToken"`
	AccountType   *interface{}              `json:"accountType"`
	Country       *CountryCodeEnum          `json:"country"`
	Currency      *CurrencyCodeEnum         `json:"currency"`
	Error         *Error                    `json:"error"`
	ID            *string                   `json:"id"`
	Status        *FeedConnectionStatusEnum `json:"status"`
}
