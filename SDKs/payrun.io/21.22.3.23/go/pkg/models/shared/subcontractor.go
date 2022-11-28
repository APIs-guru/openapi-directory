package shared

import (
	"time"
)

// SubContractorSubContractorAddress
// The sub contractors' address
type SubContractorSubContractorAddress struct {
	Address1 *string `json:"Address1,omitempty"`
	Address2 *string `json:"Address2,omitempty"`
	Address3 *string `json:"Address3,omitempty"`
	Address4 *string `json:"Address4,omitempty"`
	Country  *string `json:"Country,omitempty"`
	Postcode *string `json:"Postcode,omitempty"`
}

// SubContractorSubContractorBankAccount
// The sub contractors' bank account
type SubContractorSubContractorBankAccount struct {
	AccountName   *string `json:"AccountName,omitempty"`
	AccountNumber *string `json:"AccountNumber,omitempty"`
	Reference     *string `json:"Reference,omitempty"`
	SortCode      *string `json:"SortCode,omitempty"`
}

type SubContractorSubContractorBusinessTypeEnum string

const (
	SubContractorSubContractorBusinessTypeEnumSoleTrader  SubContractorSubContractorBusinessTypeEnum = "SoleTrader"
	SubContractorSubContractorBusinessTypeEnumCompany     SubContractorSubContractorBusinessTypeEnum = "Company"
	SubContractorSubContractorBusinessTypeEnumPartnership SubContractorSubContractorBusinessTypeEnum = "Partnership"
	SubContractorSubContractorBusinessTypeEnumTrust       SubContractorSubContractorBusinessTypeEnum = "Trust"
)

type SubContractorSubContractorPayFrequencyEnum string

const (
	SubContractorSubContractorPayFrequencyEnumMonthly SubContractorSubContractorPayFrequencyEnum = "Monthly"
	SubContractorSubContractorPayFrequencyEnumWeekly  SubContractorSubContractorPayFrequencyEnum = "Weekly"
)

type SubContractorSubContractorPaymentMethodEnum string

const (
	SubContractorSubContractorPaymentMethodEnumNotSet         SubContractorSubContractorPaymentMethodEnum = "NotSet"
	SubContractorSubContractorPaymentMethodEnumCash           SubContractorSubContractorPaymentMethodEnum = "Cash"
	SubContractorSubContractorPaymentMethodEnumCheque         SubContractorSubContractorPaymentMethodEnum = "Cheque"
	SubContractorSubContractorPaymentMethodEnumBacs           SubContractorSubContractorPaymentMethodEnum = "BACS"
	SubContractorSubContractorPaymentMethodEnumFasterPayments SubContractorSubContractorPaymentMethodEnum = "FasterPayments"
	SubContractorSubContractorPaymentMethodEnumOther          SubContractorSubContractorPaymentMethodEnum = "Other"
)

type SubContractorSubContractorRegionEnum string

const (
	SubContractorSubContractorRegionEnumNotSet   SubContractorSubContractorRegionEnum = "NotSet"
	SubContractorSubContractorRegionEnumEngland  SubContractorSubContractorRegionEnum = "England"
	SubContractorSubContractorRegionEnumScotland SubContractorSubContractorRegionEnum = "Scotland"
	SubContractorSubContractorRegionEnumWales    SubContractorSubContractorRegionEnum = "Wales"
)

type SubContractorSubContractorTaxationStatusEnum string

const (
	SubContractorSubContractorTaxationStatusEnumUnmatched SubContractorSubContractorTaxationStatusEnum = "Unmatched"
	SubContractorSubContractorTaxationStatusEnumNet       SubContractorSubContractorTaxationStatusEnum = "Net"
	SubContractorSubContractorTaxationStatusEnumGross     SubContractorSubContractorTaxationStatusEnum = "Gross"
)

type SubContractorSubContractorTerritoryEnum string

const (
	SubContractorSubContractorTerritoryEnumUnitedKingdom SubContractorSubContractorTerritoryEnum = "UnitedKingdom"
)

type SubContractorSubContractor struct {
	Address                       *SubContractorSubContractorAddress            `json:"Address,omitempty"`
	BankAccount                   *SubContractorSubContractorBankAccount        `json:"BankAccount,omitempty"`
	BusinessType                  *SubContractorSubContractorBusinessTypeEnum   `json:"BusinessType,omitempty"`
	CompanyName                   *string                                       `json:"CompanyName,omitempty"`
	CompanyRegistrationNumber     *string                                       `json:"CompanyRegistrationNumber,omitempty"`
	Deactivated                   *bool                                         `json:"Deactivated,omitempty"`
	EffectiveDate                 *time.Time                                    `json:"EffectiveDate,omitempty"`
	FirstName                     *string                                       `json:"FirstName,omitempty"`
	Initials                      *string                                       `json:"Initials,omitempty"`
	LastName                      *string                                       `json:"LastName,omitempty"`
	MetaData                      map[string]interface{}                        `json:"MetaData,omitempty"`
	MiddleName                    *string                                       `json:"MiddleName,omitempty"`
	NiNumber                      *string                                       `json:"NiNumber,omitempty"`
	PartnershipName               *string                                       `json:"PartnershipName,omitempty"`
	PartnershipUniqueTaxReference *string                                       `json:"PartnershipUniqueTaxReference,omitempty"`
	PayFrequency                  *SubContractorSubContractorPayFrequencyEnum   `json:"PayFrequency,omitempty"`
	PaymentMethod                 *SubContractorSubContractorPaymentMethodEnum  `json:"PaymentMethod,omitempty"`
	Region                        *SubContractorSubContractorRegionEnum         `json:"Region,omitempty"`
	Revision                      *int32                                        `json:"Revision,omitempty"`
	TaxationStatus                *SubContractorSubContractorTaxationStatusEnum `json:"TaxationStatus,omitempty"`
	Telephone                     *string                                       `json:"Telephone,omitempty"`
	Territory                     *SubContractorSubContractorTerritoryEnum      `json:"Territory,omitempty"`
	Title                         *string                                       `json:"Title,omitempty"`
	TradingName                   *string                                       `json:"TradingName,omitempty"`
	UniqueTaxReference            *string                                       `json:"UniqueTaxReference,omitempty"`
	VatRegistered                 *bool                                         `json:"VatRegistered,omitempty"`
	VatRegistrationNumber         *string                                       `json:"VatRegistrationNumber,omitempty"`
	VerificationDate              *time.Time                                    `json:"VerificationDate,omitempty"`
	VerificationNumber            *string                                       `json:"VerificationNumber,omitempty"`
	WorksNumber                   *string                                       `json:"WorksNumber,omitempty"`
}

type SubContractor struct {
	SubContractor *SubContractorSubContractor `json:"SubContractor,omitempty"`
}
