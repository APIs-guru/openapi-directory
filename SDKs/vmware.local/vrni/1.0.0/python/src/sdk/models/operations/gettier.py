from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTierPathParams:
    tier_id: str = field(metadata={'path_param': { 'field_name': 'tier-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTierHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTierSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTierRequest:
    headers: GetTierHeaders = field()
    path_params: GetTierPathParams = field()
    security: GetTierSecurity = field()
    

@dataclass
class GetTierResponse:
    content_type: str = field()
    status_code: int = field()
    tier: Optional[shared.Tier] = field(default=None)
    
