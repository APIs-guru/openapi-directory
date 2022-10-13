from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CampaignsCreatePathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CampaignsCreateSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CampaignsCreateRequest:
    path_params: CampaignsCreatePathParams = field(default=None)
    request: Optional[shared.CampaignRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CampaignsCreateSecurity = field(default=None)
    

@dataclass
class CampaignsCreateResponse:
    campaign_response: Optional[shared.CampaignResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
