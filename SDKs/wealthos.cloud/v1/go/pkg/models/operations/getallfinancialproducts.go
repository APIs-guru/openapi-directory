package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAllFinancialProductsQueryParams struct {
	ProductTypes *string `queryParam:"style=form,explode=true,name=product_types"`
}

type GetAllFinancialProductsHeaders struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type GetAllFinancialProductsSecurity struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsFlexibleEnum string

const (
	GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsFlexibleEnumYes GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsFlexibleEnum = "YES"
	GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsFlexibleEnumNo  GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsFlexibleEnum = "NO"
)

type GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsInterestPreferences struct {
	InterestAccrualBasis     *string `json:"interest_accrual_basis,omitempty"`
	InterestPaymentFrequency *string `json:"interest_payment_frequency,omitempty"`
	PayInterest              *string `json:"pay_interest,omitempty"`
}

type GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsInvestmentPreferences struct {
	MinimumOneOffInvestment         *string  `json:"minimum_one_off_investment,omitempty"`
	MinimumRegularMonthlyInvestment *string  `json:"minimum_regular_monthly_investment,omitempty"`
	RegularInvestmentDates          []string `json:"regular_investment_dates,omitempty"`
	RegularInvestmentFrequencies    []string `json:"regular_investment_frequencies,omitempty"`
}

type GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsWithdrawalPreferences struct {
	MinimumOneOffWithdrawal         *string  `json:"minimum_one_off_withdrawal,omitempty"`
	MinimumRegularMonthlyWithdrawal *string  `json:"minimum_regular_monthly_withdrawal,omitempty"`
	RegularWithdrawalFrequencies    []string `json:"regular_withdrawal_frequencies,omitempty"`
	RegularWithdrawalPaymentDates   []string `json:"regular_withdrawal_payment_dates,omitempty"`
}

type GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProducts struct {
	AdditionalCashCurrencies []string                                                                                    `json:"additional_cash_currencies,omitempty"`
	Availability             []string                                                                                    `json:"availability,omitempty"`
	CreatedAt                *time.Time                                                                                  `json:"created_at,omitempty"`
	DividendOptions          []string                                                                                    `json:"dividend_options,omitempty"`
	FinancialProductID       string                                                                                      `json:"financial_product_id"`
	Flexible                 *GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsFlexibleEnum          `json:"flexible,omitempty"`
	InterestPreferences      *GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsInterestPreferences   `json:"interest_preferences,omitempty"`
	InvestmentPreferences    *GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsInvestmentPreferences `json:"investment_preferences,omitempty"`
	Name                     string                                                                                      `json:"name"`
	ProductType              string                                                                                      `json:"product_type"`
	UpdatedAt                *time.Time                                                                                  `json:"updated_at,omitempty"`
	WithdrawalPreferences    *GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsWithdrawalPreferences `json:"withdrawal_preferences,omitempty"`
}

type GetAllFinancialProducts200ApplicationJSON struct {
	FinancialProducts []GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProducts `json:"financial_products"`
}

type GetAllFinancialProductsRequest struct {
	QueryParams GetAllFinancialProductsQueryParams
	Headers     GetAllFinancialProductsHeaders
	Security    GetAllFinancialProductsSecurity
}

type GetAllFinancialProductsResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetAllFinancialProducts200ApplicationJSONObject *GetAllFinancialProducts200ApplicationJSON
	GetAllFinancialProducts400ApplicationJSONAny    *interface{}
	GetAllFinancialProducts401ApplicationJSONAny    *interface{}
	GetAllFinancialProducts403ApplicationJSONAny    *interface{}
	GetAllFinancialProducts404ApplicationJSONAny    *interface{}
	GetAllFinancialProducts429ApplicationJSONAny    *interface{}
	GetAllFinancialProducts500ApplicationJSONAny    *interface{}
}
