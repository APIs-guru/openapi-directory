from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CampaignsCreatePathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CampaignsCreateSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CampaignsCreateRequest:
    path_params: CampaignsCreatePathParams = field()
    security: CampaignsCreateSecurity = field()
    request: Optional[shared.CampaignRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CampaignsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    campaign_response: Optional[shared.CampaignResponse] = field(default=None)
    
