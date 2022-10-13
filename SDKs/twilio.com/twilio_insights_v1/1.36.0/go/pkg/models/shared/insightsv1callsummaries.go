package shared

import (
	"time"
)

type InsightsV1CallSummaries struct {
	AccountSid      *string                               `json:"account_sid"`
	Attributes      *interface{}                          `json:"attributes"`
	CallSid         *string                               `json:"call_sid"`
	CallState       *CallSummariesEnumCallStateEnum       `json:"call_state"`
	CallType        *CallSummariesEnumCallTypeEnum        `json:"call_type"`
	CarrierEdge     *interface{}                          `json:"carrier_edge"`
	ClientEdge      *interface{}                          `json:"client_edge"`
	ConnectDuration *int64                                `json:"connect_duration"`
	CreatedTime     *time.Time                            `json:"created_time"`
	Duration        *int64                                `json:"duration"`
	EndTime         *time.Time                            `json:"end_time"`
	From            *interface{}                          `json:"from"`
	ProcessingState *CallSummariesEnumProcessingStateEnum `json:"processing_state"`
	Properties      *interface{}                          `json:"properties"`
	SdkEdge         *interface{}                          `json:"sdk_edge"`
	SipEdge         *interface{}                          `json:"sip_edge"`
	StartTime       *time.Time                            `json:"start_time"`
	Tags            []string                              `json:"tags"`
	To              *interface{}                          `json:"to"`
	Trust           *interface{}                          `json:"trust"`
	URL             *string                               `json:"url"`
}
