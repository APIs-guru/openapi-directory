package shared

import (
	"time"
)

type SubContractorSubContractorAddressAddress struct {
	Address1 *string `json:"Address1"`
	Address2 *string `json:"Address2"`
	Address3 *string `json:"Address3"`
	Address4 *string `json:"Address4"`
	Country  *string `json:"Country"`
	Postcode *string `json:"Postcode"`
}

type SubContractorSubContractorBankAccountBankAccount struct {
	AccountName   *string `json:"AccountName"`
	AccountNumber *string `json:"AccountNumber"`
	Reference     *string `json:"Reference"`
	SortCode      *string `json:"SortCode"`
}

type SubContractorSubContractorBusinessTypeBusinessTypeEnum string

const (
	SubContractorSubContractorBusinessTypeBusinessTypeEnumSoleTrader  SubContractorSubContractorBusinessTypeBusinessTypeEnum = "SoleTrader"
	SubContractorSubContractorBusinessTypeBusinessTypeEnumCompany     SubContractorSubContractorBusinessTypeBusinessTypeEnum = "Company"
	SubContractorSubContractorBusinessTypeBusinessTypeEnumPartnership SubContractorSubContractorBusinessTypeBusinessTypeEnum = "Partnership"
	SubContractorSubContractorBusinessTypeBusinessTypeEnumTrust       SubContractorSubContractorBusinessTypeBusinessTypeEnum = "Trust"
)

type SubContractorSubContractorPayFrequencyPayFrequencyEnum string

const (
	SubContractorSubContractorPayFrequencyPayFrequencyEnumMonthly SubContractorSubContractorPayFrequencyPayFrequencyEnum = "Monthly"
	SubContractorSubContractorPayFrequencyPayFrequencyEnumWeekly  SubContractorSubContractorPayFrequencyPayFrequencyEnum = "Weekly"
)

type SubContractorSubContractorPaymentMethodPaymentMethodEnum string

const (
	SubContractorSubContractorPaymentMethodPaymentMethodEnumNotSet         SubContractorSubContractorPaymentMethodPaymentMethodEnum = "NotSet"
	SubContractorSubContractorPaymentMethodPaymentMethodEnumCash           SubContractorSubContractorPaymentMethodPaymentMethodEnum = "Cash"
	SubContractorSubContractorPaymentMethodPaymentMethodEnumCheque         SubContractorSubContractorPaymentMethodPaymentMethodEnum = "Cheque"
	SubContractorSubContractorPaymentMethodPaymentMethodEnumBacs           SubContractorSubContractorPaymentMethodPaymentMethodEnum = "BACS"
	SubContractorSubContractorPaymentMethodPaymentMethodEnumFasterPayments SubContractorSubContractorPaymentMethodPaymentMethodEnum = "FasterPayments"
	SubContractorSubContractorPaymentMethodPaymentMethodEnumOther          SubContractorSubContractorPaymentMethodPaymentMethodEnum = "Other"
)

type SubContractorSubContractorRegionRegionEnum string

const (
	SubContractorSubContractorRegionRegionEnumNotSet   SubContractorSubContractorRegionRegionEnum = "NotSet"
	SubContractorSubContractorRegionRegionEnumEngland  SubContractorSubContractorRegionRegionEnum = "England"
	SubContractorSubContractorRegionRegionEnumScotland SubContractorSubContractorRegionRegionEnum = "Scotland"
	SubContractorSubContractorRegionRegionEnumWales    SubContractorSubContractorRegionRegionEnum = "Wales"
)

type SubContractorSubContractorTaxationStatusTaxationStatusEnum string

const (
	SubContractorSubContractorTaxationStatusTaxationStatusEnumUnmatched SubContractorSubContractorTaxationStatusTaxationStatusEnum = "Unmatched"
	SubContractorSubContractorTaxationStatusTaxationStatusEnumNet       SubContractorSubContractorTaxationStatusTaxationStatusEnum = "Net"
	SubContractorSubContractorTaxationStatusTaxationStatusEnumGross     SubContractorSubContractorTaxationStatusTaxationStatusEnum = "Gross"
)

type SubContractorSubContractorTerritoryTerritoryEnum string

const (
	SubContractorSubContractorTerritoryTerritoryEnumUnitedKingdom SubContractorSubContractorTerritoryTerritoryEnum = "UnitedKingdom"
)

type SubContractorSubContractorSubContractor struct {
	Address                       *SubContractorSubContractorAddressAddress                   `json:"Address"`
	BankAccount                   *SubContractorSubContractorBankAccountBankAccount           `json:"BankAccount"`
	BusinessType                  *SubContractorSubContractorBusinessTypeBusinessTypeEnum     `json:"BusinessType"`
	CompanyName                   *string                                                     `json:"CompanyName"`
	CompanyRegistrationNumber     *string                                                     `json:"CompanyRegistrationNumber"`
	Deactivated                   *bool                                                       `json:"Deactivated"`
	EffectiveDate                 *time.Time                                                  `json:"EffectiveDate"`
	FirstName                     *string                                                     `json:"FirstName"`
	Initials                      *string                                                     `json:"Initials"`
	LastName                      *string                                                     `json:"LastName"`
	MetaData                      map[string]interface{}                                      `json:"MetaData"`
	MiddleName                    *string                                                     `json:"MiddleName"`
	NiNumber                      *string                                                     `json:"NiNumber"`
	PartnershipName               *string                                                     `json:"PartnershipName"`
	PartnershipUniqueTaxReference *string                                                     `json:"PartnershipUniqueTaxReference"`
	PayFrequency                  *SubContractorSubContractorPayFrequencyPayFrequencyEnum     `json:"PayFrequency"`
	PaymentMethod                 *SubContractorSubContractorPaymentMethodPaymentMethodEnum   `json:"PaymentMethod"`
	Region                        *SubContractorSubContractorRegionRegionEnum                 `json:"Region"`
	Revision                      *int32                                                      `json:"Revision"`
	TaxationStatus                *SubContractorSubContractorTaxationStatusTaxationStatusEnum `json:"TaxationStatus"`
	Telephone                     *string                                                     `json:"Telephone"`
	Territory                     *SubContractorSubContractorTerritoryTerritoryEnum           `json:"Territory"`
	Title                         *string                                                     `json:"Title"`
	TradingName                   *string                                                     `json:"TradingName"`
	UniqueTaxReference            *string                                                     `json:"UniqueTaxReference"`
	VatRegistered                 *bool                                                       `json:"VatRegistered"`
	VatRegistrationNumber         *string                                                     `json:"VatRegistrationNumber"`
	VerificationDate              *time.Time                                                  `json:"VerificationDate"`
	VerificationNumber            *string                                                     `json:"VerificationNumber"`
	WorksNumber                   *string                                                     `json:"WorksNumber"`
}

type SubContractor struct {
	SubContractor *SubContractorSubContractorSubContractor `json:"SubContractor"`
}
