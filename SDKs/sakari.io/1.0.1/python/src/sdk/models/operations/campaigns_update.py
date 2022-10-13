from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CampaignsUpdatePathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaignId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CampaignsUpdateSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CampaignsUpdateRequest:
    path_params: CampaignsUpdatePathParams = field(default=None)
    security: CampaignsUpdateSecurity = field(default=None)
    

@dataclass
class CampaignsUpdateResponse:
    campaign_response: Optional[shared.CampaignResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
