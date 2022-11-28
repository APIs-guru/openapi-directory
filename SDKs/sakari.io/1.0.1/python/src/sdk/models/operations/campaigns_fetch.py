from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CampaignsFetchPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaignId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CampaignsFetchSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CampaignsFetchRequest:
    path_params: CampaignsFetchPathParams = field()
    security: CampaignsFetchSecurity = field()
    

@dataclass
class CampaignsFetchResponse:
    content_type: str = field()
    status_code: int = field()
    campaign_response: Optional[shared.CampaignResponse] = field(default=None)
    
