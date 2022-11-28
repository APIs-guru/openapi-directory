from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetApplicationTierPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    tier_id: str = field(metadata={'path_param': { 'field_name': 'tier-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetApplicationTierSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetApplicationTierRequest:
    path_params: GetApplicationTierPathParams = field()
    security: GetApplicationTierSecurity = field()
    

@dataclass
class GetApplicationTierResponse:
    content_type: str = field()
    status_code: int = field()
    tier: Optional[shared.Tier] = field(default=None)
    
