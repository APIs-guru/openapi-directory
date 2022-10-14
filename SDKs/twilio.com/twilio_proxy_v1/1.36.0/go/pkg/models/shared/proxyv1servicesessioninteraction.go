package shared

import (
	"time"
)

type ProxyV1ServiceSessionInteraction struct {
	AccountSid             *string                            `json:"account_sid,omitempty"`
	Data                   *string                            `json:"data,omitempty"`
	DateCreated            *time.Time                         `json:"date_created,omitempty"`
	DateUpdated            *time.Time                         `json:"date_updated,omitempty"`
	InboundParticipantSid  *string                            `json:"inbound_participant_sid,omitempty"`
	InboundResourceSid     *string                            `json:"inbound_resource_sid,omitempty"`
	InboundResourceStatus  *InteractionEnumResourceStatusEnum `json:"inbound_resource_status,omitempty"`
	InboundResourceType    *string                            `json:"inbound_resource_type,omitempty"`
	InboundResourceURL     *string                            `json:"inbound_resource_url,omitempty"`
	OutboundParticipantSid *string                            `json:"outbound_participant_sid,omitempty"`
	OutboundResourceSid    *string                            `json:"outbound_resource_sid,omitempty"`
	OutboundResourceStatus *InteractionEnumResourceStatusEnum `json:"outbound_resource_status,omitempty"`
	OutboundResourceType   *string                            `json:"outbound_resource_type,omitempty"`
	OutboundResourceURL    *string                            `json:"outbound_resource_url,omitempty"`
	ServiceSid             *string                            `json:"service_sid,omitempty"`
	SessionSid             *string                            `json:"session_sid,omitempty"`
	Sid                    *string                            `json:"sid,omitempty"`
	Type                   *InteractionEnumTypeEnum           `json:"type,omitempty"`
	URL                    *string                            `json:"url,omitempty"`
}
