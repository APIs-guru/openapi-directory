package shared

type ErrorTypeEnum string

const (
	ErrorTypeEnumInvalidRequest                              ErrorTypeEnum = "invalid-request"
	ErrorTypeEnumInvalidApplication                          ErrorTypeEnum = "invalid-application"
	ErrorTypeEnumInvalidFeedConnection                       ErrorTypeEnum = "invalid-feed-connection"
	ErrorTypeEnumDuplicateStatement                          ErrorTypeEnum = "duplicate-statement"
	ErrorTypeEnumInvalidEndBalance                           ErrorTypeEnum = "invalid-end-balance"
	ErrorTypeEnumInvalidStartAndEndDate                      ErrorTypeEnum = "invalid-start-and-end-date"
	ErrorTypeEnumInvalidStartDate                            ErrorTypeEnum = "invalid-start-date"
	ErrorTypeEnumInternalError                               ErrorTypeEnum = "internal-error"
	ErrorTypeEnumFeedAlreadyConnectedInCurrentOrganisation   ErrorTypeEnum = "feed-already-connected-in-current-organisation"
	ErrorTypeEnumInvalidEndDate                              ErrorTypeEnum = "invalid-end-date"
	ErrorTypeEnumStatementNotFound                           ErrorTypeEnum = "statement-not-found"
	ErrorTypeEnumFeedConnectedInDifferentOrganisation        ErrorTypeEnum = "feed-connected-in-different-organisation"
	ErrorTypeEnumFeedAlreadyConnectedInDifferentOrganisation ErrorTypeEnum = "feed-already-connected-in-different-organisation"
	ErrorTypeEnumBankFeedNotFound                            ErrorTypeEnum = "bank-feed-not-found"
	ErrorTypeEnumInvalidCountrySpecified                     ErrorTypeEnum = "invalid-country-specified"
	ErrorTypeEnumInvalidOrganisationBankFeeds                ErrorTypeEnum = "invalid-organisation-bank-feeds"
	ErrorTypeEnumInvalidOrganisationMultiCurrency            ErrorTypeEnum = "invalid-organisation-multi-currency"
	ErrorTypeEnumInvalidFeedConnectionForOrganisation        ErrorTypeEnum = "invalid-feed-connection-for-organisation"
	ErrorTypeEnumInvalidUserRole                             ErrorTypeEnum = "invalid-user-role"
	ErrorTypeEnumAccountNotValid                             ErrorTypeEnum = "account-not-valid"
)

type Error struct {
	Detail *string        `json:"detail,omitempty"`
	Status *int64         `json:"status,omitempty"`
	Title  *string        `json:"title,omitempty"`
	Type   *ErrorTypeEnum `json:"type,omitempty"`
}
