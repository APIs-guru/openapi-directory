package shared

type SaveAccountTypeEnum string

const (
	SaveAccountTypeEnumChecking       SaveAccountTypeEnum = "checking"
	SaveAccountTypeEnumSavings        SaveAccountTypeEnum = "savings"
	SaveAccountTypeEnumCreditCard     SaveAccountTypeEnum = "creditCard"
	SaveAccountTypeEnumCash           SaveAccountTypeEnum = "cash"
	SaveAccountTypeEnumLineOfCredit   SaveAccountTypeEnum = "lineOfCredit"
	SaveAccountTypeEnumOtherAsset     SaveAccountTypeEnum = "otherAsset"
	SaveAccountTypeEnumOtherLiability SaveAccountTypeEnum = "otherLiability"
)

type SaveAccount struct {
	Balance int64               `json:"balance"`
	Name    string              `json:"name"`
	Type    SaveAccountTypeEnum `json:"type"`
}
