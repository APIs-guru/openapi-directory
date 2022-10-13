from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetApplicationTierPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    tier_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tier-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetApplicationTierSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetApplicationTierRequest:
    path_params: GetApplicationTierPathParams = field(default=None)
    security: GetApplicationTierSecurity = field(default=None)
    

@dataclass
class GetApplicationTierResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tier: Optional[shared.Tier] = field(default=None)
    
