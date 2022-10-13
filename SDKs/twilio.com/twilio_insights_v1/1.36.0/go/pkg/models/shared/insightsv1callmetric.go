package shared

type InsightsV1CallMetric struct {
	AccountSid  *string                        `json:"account_sid"`
	CallSid     *string                        `json:"call_sid"`
	CarrierEdge *interface{}                   `json:"carrier_edge"`
	ClientEdge  *interface{}                   `json:"client_edge"`
	Direction   *MetricEnumStreamDirectionEnum `json:"direction"`
	Edge        *MetricEnumTwilioEdgeEnum      `json:"edge"`
	SdkEdge     *interface{}                   `json:"sdk_edge"`
	SipEdge     *interface{}                   `json:"sip_edge"`
	Timestamp   *string                        `json:"timestamp"`
}
