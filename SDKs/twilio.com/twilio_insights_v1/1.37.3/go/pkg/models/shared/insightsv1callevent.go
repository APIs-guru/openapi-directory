package shared

type InsightsV1CallEvent struct {
	AccountSid  *string                  `json:"account_sid,omitempty"`
	CallSid     *string                  `json:"call_sid,omitempty"`
	CarrierEdge *interface{}             `json:"carrier_edge,omitempty"`
	ClientEdge  *interface{}             `json:"client_edge,omitempty"`
	Edge        *EventEnumTwilioEdgeEnum `json:"edge,omitempty"`
	Group       *string                  `json:"group,omitempty"`
	Level       *EventEnumLevelEnum      `json:"level,omitempty"`
	Name        *string                  `json:"name,omitempty"`
	SdkEdge     *interface{}             `json:"sdk_edge,omitempty"`
	SipEdge     *interface{}             `json:"sip_edge,omitempty"`
	Timestamp   *string                  `json:"timestamp,omitempty"`
}
