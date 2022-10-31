package shared

type InsightsV1CallMetric struct {
	AccountSid  *string                        `json:"account_sid,omitempty"`
	CallSid     *string                        `json:"call_sid,omitempty"`
	CarrierEdge *interface{}                   `json:"carrier_edge,omitempty"`
	ClientEdge  *interface{}                   `json:"client_edge,omitempty"`
	Direction   *MetricEnumStreamDirectionEnum `json:"direction,omitempty"`
	Edge        *MetricEnumTwilioEdgeEnum      `json:"edge,omitempty"`
	SdkEdge     *interface{}                   `json:"sdk_edge,omitempty"`
	SipEdge     *interface{}                   `json:"sip_edge,omitempty"`
	Timestamp   *string                        `json:"timestamp,omitempty"`
}
