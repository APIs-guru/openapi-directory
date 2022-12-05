package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllinvestorAccountsQueryParams struct {
	AccountID          *string `queryParam:"style=form,explode=true,name=account_id"`
	FinancialProductID *string `queryParam:"style=form,explode=true,name=financial_product_id"`
	InvestorID         *string `queryParam:"style=form,explode=true,name=investor_id"`
	PageNumber         *string `queryParam:"style=form,explode=true,name=page_number"`
	PageSize           *string `queryParam:"style=form,explode=true,name=page_size"`
	Status             *string `queryParam:"style=form,explode=true,name=status"`
}

type GetAllinvestorAccountsHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetAllinvestorAccountsSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

// GetAllinvestorAccounts200ApplicationJSON
// Array of investor accounts
type GetAllinvestorAccounts200ApplicationJSON struct {
	InvestorAccounts  []interface{} `json:"investor_accounts,omitempty"`
	NextPageAvailable *bool         `json:"next_page_available,omitempty"`
}

type GetAllinvestorAccountsRequest struct {
	QueryParams GetAllinvestorAccountsQueryParams
	Headers     GetAllinvestorAccountsHeaders
	Security    GetAllinvestorAccountsSecurity
}

type GetAllinvestorAccountsResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetAllinvestorAccounts200ApplicationJSONObject *GetAllinvestorAccounts200ApplicationJSON
	GetAllinvestorAccounts400ApplicationJSONAny    *interface{}
	GetAllinvestorAccounts401ApplicationJSONAny    *interface{}
	GetAllinvestorAccounts403ApplicationJSONAny    *interface{}
	GetAllinvestorAccounts404ApplicationJSONAny    *interface{}
	GetAllinvestorAccounts409ApplicationJSONAny    *interface{}
	GetAllinvestorAccounts429ApplicationJSONAny    *interface{}
	GetAllinvestorAccounts500ApplicationJSONAny    *interface{}
}
