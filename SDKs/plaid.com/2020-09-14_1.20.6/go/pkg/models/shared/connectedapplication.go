package shared

type ConnectedApplicationProductDataTypesEnum string

const (
	ConnectedApplicationProductDataTypesEnumAccountBalance      ConnectedApplicationProductDataTypesEnum = "ACCOUNT_BALANCE"
	ConnectedApplicationProductDataTypesEnumAccountUserInfo     ConnectedApplicationProductDataTypesEnum = "ACCOUNT_USER_INFO"
	ConnectedApplicationProductDataTypesEnumAccountTransactions ConnectedApplicationProductDataTypesEnum = "ACCOUNT_TRANSACTIONS"
)

// ConnectedApplication
// Describes the connected application for a particular end user.
type ConnectedApplication struct {
	ApplicationID    string                                     `json:"application_id"`
	ApplicationURL   string                                     `json:"application_url"`
	CreatedAt        string                                     `json:"created_at"`
	Logo             string                                     `json:"logo"`
	LogoURL          string                                     `json:"logo_url"`
	Name             string                                     `json:"name"`
	ProductDataTypes []ConnectedApplicationProductDataTypesEnum `json:"product_data_types"`
	ReasonForAccess  string                                     `json:"reason_for_access"`
	RequestedScopes  *RequestedScopes                           `json:"requested_scopes,omitempty"`
	Scopes           map[string]interface{}                     `json:"scopes,omitempty"`
}
