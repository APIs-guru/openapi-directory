package shared

type UserType2Enum string

const (
	UserType2EnumBackoffice UserType2Enum = "BACKOFFICE"
	UserType2EnumPayor      UserType2Enum = "PAYOR"
	UserType2EnumPayee      UserType2Enum = "PAYEE"
)
