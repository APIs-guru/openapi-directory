package shared

import (
	"time"
)

type FaxV1FaxDirectionEnum string

const (
	FaxV1FaxDirectionEnumInbound  FaxV1FaxDirectionEnum = "inbound"
	FaxV1FaxDirectionEnumOutbound FaxV1FaxDirectionEnum = "outbound"
)

type FaxV1FaxQualityEnum string

const (
	FaxV1FaxQualityEnumStandard  FaxV1FaxQualityEnum = "standard"
	FaxV1FaxQualityEnumFine      FaxV1FaxQualityEnum = "fine"
	FaxV1FaxQualityEnumSuperfine FaxV1FaxQualityEnum = "superfine"
)

type FaxV1FaxStatusEnum string

const (
	FaxV1FaxStatusEnumQueued     FaxV1FaxStatusEnum = "queued"
	FaxV1FaxStatusEnumProcessing FaxV1FaxStatusEnum = "processing"
	FaxV1FaxStatusEnumSending    FaxV1FaxStatusEnum = "sending"
	FaxV1FaxStatusEnumDelivered  FaxV1FaxStatusEnum = "delivered"
	FaxV1FaxStatusEnumReceiving  FaxV1FaxStatusEnum = "receiving"
	FaxV1FaxStatusEnumReceived   FaxV1FaxStatusEnum = "received"
	FaxV1FaxStatusEnumNoAnswer   FaxV1FaxStatusEnum = "no-answer"
	FaxV1FaxStatusEnumBusy       FaxV1FaxStatusEnum = "busy"
	FaxV1FaxStatusEnumFailed     FaxV1FaxStatusEnum = "failed"
	FaxV1FaxStatusEnumCanceled   FaxV1FaxStatusEnum = "canceled"
)

type FaxV1Fax struct {
	AccountSid  *string                `json:"account_sid"`
	APIVersion  *string                `json:"api_version"`
	DateCreated *time.Time             `json:"date_created"`
	DateUpdated *time.Time             `json:"date_updated"`
	Direction   *FaxV1FaxDirectionEnum `json:"direction"`
	Duration    *int64                 `json:"duration"`
	From        *string                `json:"from"`
	Links       map[string]interface{} `json:"links"`
	MediaSid    *string                `json:"media_sid"`
	MediaURL    *string                `json:"media_url"`
	NumPages    *int64                 `json:"num_pages"`
	Price       *float64               `json:"price"`
	PriceUnit   *string                `json:"price_unit"`
	Quality     *FaxV1FaxQualityEnum   `json:"quality"`
	Sid         *string                `json:"sid"`
	Status      *FaxV1FaxStatusEnum    `json:"status"`
	To          *string                `json:"to"`
	URL         *string                `json:"url"`
}
