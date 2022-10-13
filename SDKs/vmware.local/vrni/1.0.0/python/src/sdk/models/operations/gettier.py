from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTierPathParams:
    tier_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tier-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTierHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetTierSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTierRequest:
    path_params: GetTierPathParams = field(default=None)
    headers: GetTierHeaders = field(default=None)
    security: GetTierSecurity = field(default=None)
    

@dataclass
class GetTierResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tier: Optional[shared.Tier] = field(default=None)
    
