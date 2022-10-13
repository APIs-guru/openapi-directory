package shared

type EventEnumTwilioEdgeEnum string

const (
	EventEnumTwilioEdgeEnumUnknownEdge EventEnumTwilioEdgeEnum = "unknown_edge"
	EventEnumTwilioEdgeEnumCarrierEdge EventEnumTwilioEdgeEnum = "carrier_edge"
	EventEnumTwilioEdgeEnumSipEdge     EventEnumTwilioEdgeEnum = "sip_edge"
	EventEnumTwilioEdgeEnumSdkEdge     EventEnumTwilioEdgeEnum = "sdk_edge"
	EventEnumTwilioEdgeEnumClientEdge  EventEnumTwilioEdgeEnum = "client_edge"
)
