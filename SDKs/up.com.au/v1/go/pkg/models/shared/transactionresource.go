package shared

import (
	"time"
)

// TransactionResourceAttributesCashback
// If all or part of this transaction was instantly reimbursed in the
// form of cashback, details of the reimbursement.
type TransactionResourceAttributesCashback struct {
	Amount      MoneyObject `json:"amount"`
	Description string      `json:"description"`
}

// TransactionResourceAttributesForeignAmount
// The foreign currency amount of this transaction. This field will be
// `null` for domestic transactions. The amount was converted to the AUD
// amount reflected in the `amount` of this transaction. Refer to the
// `holdInfo` field for the original `foreignAmount` the transaction was
// `HELD` at.
type TransactionResourceAttributesForeignAmount struct {
	CurrencyCode     string `json:"currencyCode"`
	Value            string `json:"value"`
	ValueInBaseUnits int64  `json:"valueInBaseUnits"`
}

// TransactionResourceAttributesHoldInfoForeignAmount
// The foreign currency amount of this transaction while in the `HELD`
// status. This field will be `null` for domestic transactions. The amount
// was converted to the AUD amount reflected in the `amount` field.
type TransactionResourceAttributesHoldInfoForeignAmount struct {
	CurrencyCode     string `json:"currencyCode"`
	Value            string `json:"value"`
	ValueInBaseUnits int64  `json:"valueInBaseUnits"`
}

// TransactionResourceAttributesHoldInfo
// If this transaction is currently in the `HELD` status, or was ever in
// the `HELD` status, the `amount` and `foreignAmount` of the
// transaction while `HELD`.
type TransactionResourceAttributesHoldInfo struct {
	Amount        MoneyObject                                        `json:"amount"`
	ForeignAmount TransactionResourceAttributesHoldInfoForeignAmount `json:"foreignAmount"`
}

// TransactionResourceAttributesRoundUpBoostPortion
// The portion of the Round Up `amount` owing to boosted Round Ups,
// represented as a negative value. If no boost was added to the Round Up
// this field will be `null`.
type TransactionResourceAttributesRoundUpBoostPortion struct {
	CurrencyCode     string `json:"currencyCode"`
	Value            string `json:"value"`
	ValueInBaseUnits int64  `json:"valueInBaseUnits"`
}

// TransactionResourceAttributesRoundUp
// Details of how this transaction was rounded-up. If no Round Up was
// applied this field will be `null`.
type TransactionResourceAttributesRoundUp struct {
	Amount       MoneyObject                                      `json:"amount"`
	BoostPortion TransactionResourceAttributesRoundUpBoostPortion `json:"boostPortion"`
}

type TransactionResourceAttributes struct {
	Amount        MoneyObject                                `json:"amount"`
	Cashback      TransactionResourceAttributesCashback      `json:"cashback"`
	CreatedAt     time.Time                                  `json:"createdAt"`
	Description   string                                     `json:"description"`
	ForeignAmount TransactionResourceAttributesForeignAmount `json:"foreignAmount"`
	HoldInfo      TransactionResourceAttributesHoldInfo      `json:"holdInfo"`
	Message       string                                     `json:"message"`
	RawText       string                                     `json:"rawText"`
	RoundUp       TransactionResourceAttributesRoundUp       `json:"roundUp"`
	SettledAt     time.Time                                  `json:"settledAt"`
	Status        interface{}                                `json:"status"`
}

type TransactionResourceLinks struct {
	Self string `json:"self"`
}

type TransactionResourceRelationshipsAccountData struct {
	ID   string `json:"id"`
	Type string `json:"type"`
}

type TransactionResourceRelationshipsAccountLinks struct {
	Related string `json:"related"`
}

type TransactionResourceRelationshipsAccount struct {
	Data  TransactionResourceRelationshipsAccountData   `json:"data"`
	Links *TransactionResourceRelationshipsAccountLinks `json:"links,omitempty"`
}

type TransactionResourceRelationshipsCategoryData struct {
	ID   string `json:"id"`
	Type string `json:"type"`
}

type TransactionResourceRelationshipsCategoryLinks struct {
	Related string `json:"related"`
}

type TransactionResourceRelationshipsCategory struct {
	Data  TransactionResourceRelationshipsCategoryData   `json:"data"`
	Links *TransactionResourceRelationshipsCategoryLinks `json:"links,omitempty"`
}

type TransactionResourceRelationshipsParentCategoryData struct {
	ID   string `json:"id"`
	Type string `json:"type"`
}

type TransactionResourceRelationshipsParentCategoryLinks struct {
	Related string `json:"related"`
}

type TransactionResourceRelationshipsParentCategory struct {
	Data  TransactionResourceRelationshipsParentCategoryData   `json:"data"`
	Links *TransactionResourceRelationshipsParentCategoryLinks `json:"links,omitempty"`
}

type TransactionResourceRelationshipsTagsData struct {
	ID   string `json:"id"`
	Type string `json:"type"`
}

type TransactionResourceRelationshipsTagsLinks struct {
	Self string `json:"self"`
}

type TransactionResourceRelationshipsTags struct {
	Data  []TransactionResourceRelationshipsTagsData `json:"data"`
	Links *TransactionResourceRelationshipsTagsLinks `json:"links,omitempty"`
}

type TransactionResourceRelationships struct {
	Account        TransactionResourceRelationshipsAccount        `json:"account"`
	Category       TransactionResourceRelationshipsCategory       `json:"category"`
	ParentCategory TransactionResourceRelationshipsParentCategory `json:"parentCategory"`
	Tags           TransactionResourceRelationshipsTags           `json:"tags"`
}

type TransactionResource struct {
	Attributes    TransactionResourceAttributes    `json:"attributes"`
	ID            string                           `json:"id"`
	Links         *TransactionResourceLinks        `json:"links,omitempty"`
	Relationships TransactionResourceRelationships `json:"relationships"`
	Type          string                           `json:"type"`
}
