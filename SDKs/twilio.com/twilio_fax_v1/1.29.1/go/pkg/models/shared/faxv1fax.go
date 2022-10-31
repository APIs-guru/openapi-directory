package shared

import (
"time")


type FaxV1FaxDirectionEnum string

const (
    FaxV1FaxDirectionEnumInbound FaxV1FaxDirectionEnum = "inbound"
FaxV1FaxDirectionEnumOutbound FaxV1FaxDirectionEnum = "outbound"
)



type FaxV1FaxQualityEnum string

const (
    FaxV1FaxQualityEnumStandard FaxV1FaxQualityEnum = "standard"
FaxV1FaxQualityEnumFine FaxV1FaxQualityEnum = "fine"
FaxV1FaxQualityEnumSuperfine FaxV1FaxQualityEnum = "superfine"
)



type FaxV1FaxStatusEnum string

const (
    FaxV1FaxStatusEnumQueued FaxV1FaxStatusEnum = "queued"
FaxV1FaxStatusEnumProcessing FaxV1FaxStatusEnum = "processing"
FaxV1FaxStatusEnumSending FaxV1FaxStatusEnum = "sending"
FaxV1FaxStatusEnumDelivered FaxV1FaxStatusEnum = "delivered"
FaxV1FaxStatusEnumReceiving FaxV1FaxStatusEnum = "receiving"
FaxV1FaxStatusEnumReceived FaxV1FaxStatusEnum = "received"
FaxV1FaxStatusEnumNoAnswer FaxV1FaxStatusEnum = "no-answer"
FaxV1FaxStatusEnumBusy FaxV1FaxStatusEnum = "busy"
FaxV1FaxStatusEnumFailed FaxV1FaxStatusEnum = "failed"
FaxV1FaxStatusEnumCanceled FaxV1FaxStatusEnum = "canceled"
)


type FaxV1Fax struct {
    AccountSid *string `json:"account_sid,omitempty"`
    APIVersion *string `json:"api_version,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Direction *FaxV1FaxDirectionEnum `json:"direction,omitempty"`
    Duration *int64 `json:"duration,omitempty"`
    From *string `json:"from,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    MediaSid *string `json:"media_sid,omitempty"`
    MediaURL *string `json:"media_url,omitempty"`
    NumPages *int64 `json:"num_pages,omitempty"`
    Price *float64 `json:"price,omitempty"`
    PriceUnit *string `json:"price_unit,omitempty"`
    Quality *FaxV1FaxQualityEnum `json:"quality,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *FaxV1FaxStatusEnum `json:"status,omitempty"`
    To *string `json:"to,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

