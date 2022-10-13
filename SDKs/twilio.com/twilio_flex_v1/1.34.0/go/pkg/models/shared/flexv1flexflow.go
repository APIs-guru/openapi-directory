package shared

import (
	"time"
)

type FlexV1FlexFlow struct {
	AccountSid      *string                          `json:"account_sid"`
	ChannelType     *FlexFlowEnumChannelTypeEnum     `json:"channel_type"`
	ChatServiceSid  *string                          `json:"chat_service_sid"`
	ContactIdentity *string                          `json:"contact_identity"`
	DateCreated     *time.Time                       `json:"date_created"`
	DateUpdated     *time.Time                       `json:"date_updated"`
	Enabled         *bool                            `json:"enabled"`
	FriendlyName    *string                          `json:"friendly_name"`
	Integration     *interface{}                     `json:"integration"`
	IntegrationType *FlexFlowEnumIntegrationTypeEnum `json:"integration_type"`
	JanitorEnabled  *bool                            `json:"janitor_enabled"`
	LongLived       *bool                            `json:"long_lived"`
	Sid             *string                          `json:"sid"`
	URL             *string                          `json:"url"`
}
