package shared

import (
	"time"
)

type ProxyV1ServiceSessionParticipantMessageInteraction struct {
	AccountSid             *string                                   `json:"account_sid"`
	Data                   *string                                   `json:"data"`
	DateCreated            *time.Time                                `json:"date_created"`
	DateUpdated            *time.Time                                `json:"date_updated"`
	InboundParticipantSid  *string                                   `json:"inbound_participant_sid"`
	InboundResourceSid     *string                                   `json:"inbound_resource_sid"`
	InboundResourceStatus  *MessageInteractionEnumResourceStatusEnum `json:"inbound_resource_status"`
	InboundResourceType    *string                                   `json:"inbound_resource_type"`
	InboundResourceURL     *string                                   `json:"inbound_resource_url"`
	OutboundParticipantSid *string                                   `json:"outbound_participant_sid"`
	OutboundResourceSid    *string                                   `json:"outbound_resource_sid"`
	OutboundResourceStatus *MessageInteractionEnumResourceStatusEnum `json:"outbound_resource_status"`
	OutboundResourceType   *string                                   `json:"outbound_resource_type"`
	OutboundResourceURL    *string                                   `json:"outbound_resource_url"`
	ParticipantSid         *string                                   `json:"participant_sid"`
	ServiceSid             *string                                   `json:"service_sid"`
	SessionSid             *string                                   `json:"session_sid"`
	Sid                    *string                                   `json:"sid"`
	Type                   *MessageInteractionEnumTypeEnum           `json:"type"`
	URL                    *string                                   `json:"url"`
}
