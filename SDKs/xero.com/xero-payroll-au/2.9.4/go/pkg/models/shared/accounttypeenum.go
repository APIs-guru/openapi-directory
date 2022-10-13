package shared

type AccountTypeEnum string

const (
	AccountTypeEnumBank                    AccountTypeEnum = "BANK"
	AccountTypeEnumCurrent                 AccountTypeEnum = "CURRENT"
	AccountTypeEnumCurrliab                AccountTypeEnum = "CURRLIAB"
	AccountTypeEnumDepreciatn              AccountTypeEnum = "DEPRECIATN"
	AccountTypeEnumDirectcosts             AccountTypeEnum = "DIRECTCOSTS"
	AccountTypeEnumEquity                  AccountTypeEnum = "EQUITY"
	AccountTypeEnumExpense                 AccountTypeEnum = "EXPENSE"
	AccountTypeEnumFixed                   AccountTypeEnum = "FIXED"
	AccountTypeEnumInventory               AccountTypeEnum = "INVENTORY"
	AccountTypeEnumLiability               AccountTypeEnum = "LIABILITY"
	AccountTypeEnumNoncurrent              AccountTypeEnum = "NONCURRENT"
	AccountTypeEnumOtherincome             AccountTypeEnum = "OTHERINCOME"
	AccountTypeEnumOverheads               AccountTypeEnum = "OVERHEADS"
	AccountTypeEnumPrepayment              AccountTypeEnum = "PREPAYMENT"
	AccountTypeEnumRevenue                 AccountTypeEnum = "REVENUE"
	AccountTypeEnumSales                   AccountTypeEnum = "SALES"
	AccountTypeEnumTermliab                AccountTypeEnum = "TERMLIAB"
	AccountTypeEnumPaygliability           AccountTypeEnum = "PAYGLIABILITY"
	AccountTypeEnumPayg                    AccountTypeEnum = "PAYG"
	AccountTypeEnumSuperannuationexpense   AccountTypeEnum = "SUPERANNUATIONEXPENSE"
	AccountTypeEnumSuperannuationliability AccountTypeEnum = "SUPERANNUATIONLIABILITY"
	AccountTypeEnumWagesexpense            AccountTypeEnum = "WAGESEXPENSE"
	AccountTypeEnumWagespayableliability   AccountTypeEnum = "WAGESPAYABLELIABILITY"
)
