package shared

type AccountTypeEnum string

const (
	AccountTypeEnumChecking          AccountTypeEnum = "checking"
	AccountTypeEnumSavings           AccountTypeEnum = "savings"
	AccountTypeEnumCash              AccountTypeEnum = "cash"
	AccountTypeEnumCreditCard        AccountTypeEnum = "creditCard"
	AccountTypeEnumLineOfCredit      AccountTypeEnum = "lineOfCredit"
	AccountTypeEnumOtherAsset        AccountTypeEnum = "otherAsset"
	AccountTypeEnumOtherLiability    AccountTypeEnum = "otherLiability"
	AccountTypeEnumPayPal            AccountTypeEnum = "payPal"
	AccountTypeEnumMerchantAccount   AccountTypeEnum = "merchantAccount"
	AccountTypeEnumInvestmentAccount AccountTypeEnum = "investmentAccount"
	AccountTypeEnumMortgage          AccountTypeEnum = "mortgage"
)

type Account struct {
	Balance             int64           `json:"balance"`
	ClearedBalance      int64           `json:"cleared_balance"`
	Closed              bool            `json:"closed"`
	Deleted             bool            `json:"deleted"`
	DirectImportInError *bool           `json:"direct_import_in_error,omitempty"`
	DirectImportLinked  *bool           `json:"direct_import_linked,omitempty"`
	ID                  string          `json:"id"`
	Name                string          `json:"name"`
	Note                *string         `json:"note,omitempty"`
	OnBudget            bool            `json:"on_budget"`
	TransferPayeeID     string          `json:"transfer_payee_id"`
	Type                AccountTypeEnum `json:"type"`
	UnclearedBalance    int64           `json:"uncleared_balance"`
}
