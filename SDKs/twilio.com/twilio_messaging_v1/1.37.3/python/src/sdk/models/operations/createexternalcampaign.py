from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_EXTERNAL_CAMPAIGN_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class CreateExternalCampaignCreateExternalCampaignRequest:
    campaign_id: str = field(metadata={'form': { 'field_name': 'CampaignId' }})
    messaging_service_sid: str = field(metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    

@dataclass
class CreateExternalCampaignSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateExternalCampaignRequest:
    security: CreateExternalCampaignSecurity = field()
    request: Optional[CreateExternalCampaignCreateExternalCampaignRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateExternalCampaignResponse:
    content_type: str = field()
    status_code: int = field()
    messaging_v1_external_campaign: Optional[shared.MessagingV1ExternalCampaign] = field(default=None)
    
