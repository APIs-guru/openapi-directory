package shared

import (
	"time"
)

type TransactionResourceAttributesCashback struct {
	Amount      MoneyObject `json:"amount"`
	Description string      `json:"description"`
}

type TransactionResourceAttributesForeignAmount struct {
	CurrencyCode     string `json:"currencyCode"`
	Value            string `json:"value"`
	ValueInBaseUnits int64  `json:"valueInBaseUnits"`
}

type TransactionResourceAttributesHoldInfoForeignAmount struct {
	CurrencyCode     string `json:"currencyCode"`
	Value            string `json:"value"`
	ValueInBaseUnits int64  `json:"valueInBaseUnits"`
}

type TransactionResourceAttributesHoldInfo struct {
	Amount        MoneyObject                                        `json:"amount"`
	ForeignAmount TransactionResourceAttributesHoldInfoForeignAmount `json:"foreignAmount"`
}

type TransactionResourceAttributesRoundUpBoostPortion struct {
	CurrencyCode     string `json:"currencyCode"`
	Value            string `json:"value"`
	ValueInBaseUnits int64  `json:"valueInBaseUnits"`
}

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
