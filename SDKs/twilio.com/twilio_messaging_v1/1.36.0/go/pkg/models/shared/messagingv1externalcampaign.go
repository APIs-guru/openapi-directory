package shared

import (
"time")

type MessagingV1ExternalCampaign struct {
    AccountSid *string `json:"account_sid,omitempty"`
    CampaignID *string `json:"campaign_id,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    MessagingServiceSid *string `json:"messaging_service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    
}

