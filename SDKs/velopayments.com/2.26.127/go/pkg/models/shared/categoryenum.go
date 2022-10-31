package shared

type CategoryEnum string

const (
	CategoryEnumPayment CategoryEnum = "payment"
	CategoryEnumPayee   CategoryEnum = "payee"
	CategoryEnumDebit   CategoryEnum = "debit"
)
