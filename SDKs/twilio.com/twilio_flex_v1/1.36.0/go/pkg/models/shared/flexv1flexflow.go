package shared

import (
"time")

type FlexV1FlexFlow struct {
    AccountSid *string `json:"account_sid,omitempty"`
    ChannelType *FlexFlowEnumChannelTypeEnum `json:"channel_type,omitempty"`
    ChatServiceSid *string `json:"chat_service_sid,omitempty"`
    ContactIdentity *string `json:"contact_identity,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Integration *interface{} `json:"integration,omitempty"`
    IntegrationType *FlexFlowEnumIntegrationTypeEnum `json:"integration_type,omitempty"`
    JanitorEnabled *bool `json:"janitor_enabled,omitempty"`
    LongLived *bool `json:"long_lived,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

