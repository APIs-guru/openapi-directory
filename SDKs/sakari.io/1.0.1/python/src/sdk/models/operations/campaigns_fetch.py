from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CampaignsFetchPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaignId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CampaignsFetchSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CampaignsFetchRequest:
    path_params: CampaignsFetchPathParams = field(default=None)
    security: CampaignsFetchSecurity = field(default=None)
    

@dataclass
class CampaignsFetchResponse:
    campaign_response: Optional[shared.CampaignResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
