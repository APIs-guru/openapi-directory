package shared

import (
	"time"
)

type InsightsV1CallSummaries struct {
	AccountSid      *string                               `json:"account_sid,omitempty"`
	Attributes      *interface{}                          `json:"attributes,omitempty"`
	CallSid         *string                               `json:"call_sid,omitempty"`
	CallState       *CallSummariesEnumCallStateEnum       `json:"call_state,omitempty"`
	CallType        *CallSummariesEnumCallTypeEnum        `json:"call_type,omitempty"`
	CarrierEdge     *interface{}                          `json:"carrier_edge,omitempty"`
	ClientEdge      *interface{}                          `json:"client_edge,omitempty"`
	ConnectDuration *int64                                `json:"connect_duration,omitempty"`
	CreatedTime     *time.Time                            `json:"created_time,omitempty"`
	Duration        *int64                                `json:"duration,omitempty"`
	EndTime         *time.Time                            `json:"end_time,omitempty"`
	From            *interface{}                          `json:"from,omitempty"`
	ProcessingState *CallSummariesEnumProcessingStateEnum `json:"processing_state,omitempty"`
	Properties      *interface{}                          `json:"properties,omitempty"`
	SdkEdge         *interface{}                          `json:"sdk_edge,omitempty"`
	SipEdge         *interface{}                          `json:"sip_edge,omitempty"`
	StartTime       *time.Time                            `json:"start_time,omitempty"`
	Tags            []string                              `json:"tags,omitempty"`
	To              *interface{}                          `json:"to,omitempty"`
	Trust           *interface{}                          `json:"trust,omitempty"`
	URL             *string                               `json:"url,omitempty"`
}
