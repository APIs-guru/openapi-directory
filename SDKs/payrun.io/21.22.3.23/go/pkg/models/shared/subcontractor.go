package shared

import (
	"time"
)

type SubContractorSubContractorAddressAddress struct {
	Address1 *string `json:"Address1,omitempty"`
	Address2 *string `json:"Address2,omitempty"`
	Address3 *string `json:"Address3,omitempty"`
	Address4 *string `json:"Address4,omitempty"`
	Country  *string `json:"Country,omitempty"`
	Postcode *string `json:"Postcode,omitempty"`
}

type SubContractorSubContractorBankAccountBankAccount struct {
	AccountName   *string `json:"AccountName,omitempty"`
	AccountNumber *string `json:"AccountNumber,omitempty"`
	Reference     *string `json:"Reference,omitempty"`
	SortCode      *string `json:"SortCode,omitempty"`
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
	Address                       *SubContractorSubContractorAddressAddress                   `json:"Address,omitempty"`
	BankAccount                   *SubContractorSubContractorBankAccountBankAccount           `json:"BankAccount,omitempty"`
	BusinessType                  *SubContractorSubContractorBusinessTypeBusinessTypeEnum     `json:"BusinessType,omitempty"`
	CompanyName                   *string                                                     `json:"CompanyName,omitempty"`
	CompanyRegistrationNumber     *string                                                     `json:"CompanyRegistrationNumber,omitempty"`
	Deactivated                   *bool                                                       `json:"Deactivated,omitempty"`
	EffectiveDate                 *time.Time                                                  `json:"EffectiveDate,omitempty"`
	FirstName                     *string                                                     `json:"FirstName,omitempty"`
	Initials                      *string                                                     `json:"Initials,omitempty"`
	LastName                      *string                                                     `json:"LastName,omitempty"`
	MetaData                      map[string]interface{}                                      `json:"MetaData,omitempty"`
	MiddleName                    *string                                                     `json:"MiddleName,omitempty"`
	NiNumber                      *string                                                     `json:"NiNumber,omitempty"`
	PartnershipName               *string                                                     `json:"PartnershipName,omitempty"`
	PartnershipUniqueTaxReference *string                                                     `json:"PartnershipUniqueTaxReference,omitempty"`
	PayFrequency                  *SubContractorSubContractorPayFrequencyPayFrequencyEnum     `json:"PayFrequency,omitempty"`
	PaymentMethod                 *SubContractorSubContractorPaymentMethodPaymentMethodEnum   `json:"PaymentMethod,omitempty"`
	Region                        *SubContractorSubContractorRegionRegionEnum                 `json:"Region,omitempty"`
	Revision                      *int32                                                      `json:"Revision,omitempty"`
	TaxationStatus                *SubContractorSubContractorTaxationStatusTaxationStatusEnum `json:"TaxationStatus,omitempty"`
	Telephone                     *string                                                     `json:"Telephone,omitempty"`
	Territory                     *SubContractorSubContractorTerritoryTerritoryEnum           `json:"Territory,omitempty"`
	Title                         *string                                                     `json:"Title,omitempty"`
	TradingName                   *string                                                     `json:"TradingName,omitempty"`
	UniqueTaxReference            *string                                                     `json:"UniqueTaxReference,omitempty"`
	VatRegistered                 *bool                                                       `json:"VatRegistered,omitempty"`
	VatRegistrationNumber         *string                                                     `json:"VatRegistrationNumber,omitempty"`
	VerificationDate              *time.Time                                                  `json:"VerificationDate,omitempty"`
	VerificationNumber            *string                                                     `json:"VerificationNumber,omitempty"`
	WorksNumber                   *string                                                     `json:"WorksNumber,omitempty"`
}

type SubContractor struct {
	SubContractor *SubContractorSubContractorSubContractor `json:"SubContractor,omitempty"`
}
