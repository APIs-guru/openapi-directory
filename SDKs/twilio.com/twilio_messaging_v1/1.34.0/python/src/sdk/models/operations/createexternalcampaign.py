from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_EXTERNAL_CAMPAIGN_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class CreateExternalCampaignSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateExternalCampaignRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateExternalCampaignSecurity = field(default=None)
    

@dataclass
class CreateExternalCampaignResponses:
    messaging_v1_external_campaign: Optional[shared.MessagingV1ExternalCampaign] = field(default=None)
    

@dataclass
class CreateExternalCampaignResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateExternalCampaignResponses]] = field(default=None)
    status_code: int = field(default=None)
    
