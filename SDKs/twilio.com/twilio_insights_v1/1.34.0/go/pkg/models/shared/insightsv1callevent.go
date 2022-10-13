package shared

type InsightsV1CallEvent struct {
	AccountSid  *string                  `json:"account_sid"`
	CallSid     *string                  `json:"call_sid"`
	CarrierEdge *interface{}             `json:"carrier_edge"`
	ClientEdge  *interface{}             `json:"client_edge"`
	Edge        *EventEnumTwilioEdgeEnum `json:"edge"`
	Group       *string                  `json:"group"`
	Level       *EventEnumLevelEnum      `json:"level"`
	Name        *string                  `json:"name"`
	SdkEdge     *interface{}             `json:"sdk_edge"`
	SipEdge     *interface{}             `json:"sip_edge"`
	Timestamp   *string                  `json:"timestamp"`
}
